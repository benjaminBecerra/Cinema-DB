import { useState, useEffect } from "react"
import axios from "axios"
import { Navigate, Route, Routes, useNavigate } from "react-router"

//Componentes
import Navbar from "./components/navbar"
import SearchBar from "./components/searchBar"
import Modal from "./components/modal"
import Tendencias from "./components/tendencias"
import Discover from "./components/discover"
import Search from "./components/search"
import Item from "./components/item"
import Login from "./components/login"
import SignUp from "./components/signUp"
import NotFound from "./components/notFound"

import setLocalStorage from "./utils/setLocalStorage"

const App = () => {

  //Estados
  const [discover, setDiscover] = useState([])
  const [tendencia, setTendencia] = useState([])
  const [time, setTime] = useState('day')
  const [media, setMedia] = useState('movie')
  const [search, setSearch] = useState([])
  const [idSearch, setIdSearch] = useState([])
  const [crew, setCrew] = useState([])
  const [status, setStatus] = useState({})
  const [user, setUser] = useState(window.localStorage.getItem('user'))
  const [guest, setGuest] = useState({})

  let Nav = useNavigate()
  let url = "http://localhost:3000/api"

  //Pide "Discover" (TV y Peliculas)
  useEffect(() => {
    axios.get(`${url}/cont/discover/${media}`)
      .then(data => data.data)
      .then(data => setDiscover(data.results.slice(0, 12)))
  }, [media])

  //Pide tendencias (Dia y Semana)
  useEffect(() => {
    axios.get(`${url}/cont/tendencia/${time}`)
      .then(data => data.data)
      .then(data => setTendencia(data.results.slice(0, 12)))
  }, [time])

  //Busca por query
  const handleSearch = (input) => {
    axios.get(`${url}/cont/search/${input}`)
      .then(data => data.data)
      .then(data => setSearch(data.results))
      .then(() => Nav("/search"))
  }

  //Busca por ID
  const handleIdSearch = (id, media) => {
    axios.get(`${url}/cont/search/${media}/${id}`)
      .then(data => setIdSearch(data.data))

    axios.get(`${url}/cont/search/crew/${media}/${id}`)
      .then(data => setCrew(data.data))

  }

  //Registro
  const handleSignUp = (mail, pass) => {
    axios.post(`${url}/user/register`,
      {
        email: mail.target.value,
        password: pass.target.value
      })
      .then(data => setStatus(data.data))
      .catch(err => console.log(err))
  }

  //Log in, pide el Key de usuario invitado y guarda en el Local Storage el user
  const handleLogIn = (mail, pass) => {
    axios.post(`${url}/user/login`, { email: mail.target.value, password: pass.target.value })
      .then(data => (setUser(data.data.email),
        setLocalStorage("user", data.data.email)))
      .then(() => Nav("/"))
      .catch(err => console.log(err))

    axios.get(`${url}/user/guest`)
      .then(data => setGuest(data.data))
      .catch(err => console.log(err))
  }

  //Setea como user el usuario guardado en Local Storage
  useEffect(() => {
    setUser(window.localStorage.getItem('user'))
  }, []);


  //Log Out y borra el user de Local Storage
  const handleLogOut = () => {
    axios.post(`${url}/user/logout`)
      .then(data => data.status == "200" ? (window.localStorage.removeItem('user'), setUser("")) : "")
  }

  //Setean el texto de los botones
  const handleTimeChange = () => {
    time === 'day' ? setTime("week") : setTime("day")
  }

  const handleMediaChange = () => {
    media === 'movie' ? setMedia("tv") : setMedia("movie")
  }


  return (
    <div>
      <Navbar user={user} handleLogOut={handleLogOut} />

      {idSearch.length !== 0 ? <Modal movies={idSearch} /> : ""}

      <Routes>

        <Route path="/search" element={<>
          <SearchBar handleSearch={handleSearch} search={search} setSearch={setSearch} />

          <Search search={search} handleIdSearch={handleIdSearch} /> </>
        } />


        <Route path="/" element={<>
          <SearchBar handleSearch={handleSearch} search={search} />

          <Tendencias tendencia={tendencia} handleIdSearch={handleIdSearch} handleTimeChange={handleTimeChange} time={time} />

          <Discover discover={discover} handleIdSearch={handleIdSearch} handleMediaChange={handleMediaChange} media={media} /> </>
        } />

        <Route path="/item" element={<>
          <SearchBar handleSearch={handleSearch} search={search} />

          <Item movie={idSearch} crew={crew} /> </>
        } />

        <Route path="/login" element={<Login handleLogIn={handleLogIn} user={user} />} />

        <Route path="/signup" element={<SignUp handleSignUp={handleSignUp} status={status} setStatus={setStatus} />} />

        <Route path="/404" element={<NotFound />} />


        <Route path="*" element={<Navigate to="404" />} />

      </Routes>

    </div>
  )
}

export default App;
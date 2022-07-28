import Grid from "./grid"
import axios from "axios"
import { useState,useEffect } from "react"

const Favourites = ({ handleIdSearch, user, setUser }) => {

  const [favs, setFavs] = useState([])
  let url = "http://localhost:3000/api"

  useEffect(() => {
    let favoritos = []
    user.favourites.forEach(mov => {
      axios.get(`${url}/cont/search/${mov.movie_media}/${mov.movie_id}`)
        .then(res => favoritos = [...favoritos, res.data])
        .then(()=> setFavs(favoritos))    
    });
  }, [user])

  return (
    user ? <div style={{ marginTop: "3%", minHeight: '100vh', padding: '1%' }}>

      <div class="mt-5">

        <div class="columns">
          <div class="column is-10">
            <p class="title is-3 ml-5" style={{ color: "white" }}>Tus favoritos</p>
          </div>
        </div>

       { favs.length == user.favourites.length && <Grid movies={favs} handleIdSearch={handleIdSearch} user={user} setUser={setUser} />}
      </div>
    </div >
      :

      <h1 style={{ marginTop: "20%" }}> tees que logear </h1>

  )
}

export default Favourites
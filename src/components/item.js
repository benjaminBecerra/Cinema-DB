import Movie from "./movie"
import Cast from "./cast"
import { Navigate, useNavigate } from "react-router"
import { useEffect } from "react"

const Item = ({ movie, crew, user, setUser }) => {
  let director = crew.crew ? crew.crew.find(element => element.job === "Director") : null
  let cast = crew.crew ? crew.cast.slice(0, 12) : null
  let navigate = useNavigate()

  useEffect(() => {
    if (!movie.id) navigate('/')
  },[])

  return (

    movie.id ?
    <>
      <Movie movie={movie} user={user} setUser={setUser} />
      <Cast director={director} cast={cast} />
    </> : <></>

  )

}


export default Item
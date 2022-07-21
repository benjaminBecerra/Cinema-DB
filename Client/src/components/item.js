import Movie from "./movie"
import Cast from "./cast"

const Item = ({ movie, crew }) => {
  let director = crew.crew.find(element => element.job === "Director")
  let cast = crew.cast.slice(0, 12)


  return (

    movie.length === 0 ? <h1> 404 </h1>

      :

      <>
        <Movie movie={movie} />
        <Cast director={director} cast={cast} />
      </>

  )

}


export default Item
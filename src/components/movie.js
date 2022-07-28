import dateNormalization from "../utils/dateNormalization"
import { AiFillStar } from "react-icons/ai";
import handleFavourites from "../utils/handleFavourites";


const Movie = ({ movie, user, setUser }) => {


  const setColor = () => {
    if (user) {
      if (user.favourites.length) return user.favourites.find((mov) => mov.movie_id == movie.id)
    }
  }


  return (
    <section class="hero is-small is-primary">
      <div class="hero-body">
        <div class="columns is-multiline">
          <div class="column is-one-third" >
            <img style={{ position: "relative" }} class="image is-2by4" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
            { user && <AiFillStar onClick={() => handleFavourites(movie, setUser, user)} style={{ position: "absolute", top: "2%", left: "90%", zIndex: "1", fontSize: "40px", color: setColor() ? "gold" : "black" }} />}
          </div>
          <div class="column is-two-thirds" style={{ padding: "0 2%" }}>
            <p class="title is-1" style={{ textAlign: "center", margin: '0 auto' }}>{movie.name ? `${movie.name}` : `${movie.title} `}</p>
            <p class="title is-3" style={{ textAlign: "center" }}>{movie.name ? `(${movie.original_name})` : `(${movie.original_title})`}</p>
            <div class="columns">
              <div class="column is-8">
                <p class="title is-6">{movie.genres.map(genre => genre.name + " - ")}{movie.runtime + " mins."}</p>
              </div>
              <div class="column is-4">
                <p class="title is-6"> Estreno: {movie.first_air_date ? dateNormalization(movie.first_air_date) : dateNormalization(movie.release_date)}</p>
              </div>
            </div>

            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "10px", margin: "5% 0" }}>
              <div class="column is-half is-offset-one-third">
                <p class="title is-5">{movie.tagline}</p>
              </div>

              <div class="column is-full mt-2 mr-0" style={{ textAlign: "center" }}>
                {movie.overview}
              </div>
            </div>

            <div class="columns">
              <div class="column is-half">
                <div class="box" style={{ height: '70%', maxWidth: "90%", margin: "5% 0" }}>
                  <div>
                    <progress class="progress is-link mb-1" value={movie.vote_average} max="10"></progress>
                  </div>
                  <div class="content">
                    <h3>Puntuacion de usuarios: {String(movie.vote_average).slice(0, 3)} %</h3>
                    <p>Cantidad de votos: {movie.vote_count}</p>
                  </div>
                </div>
              </div>
              <div class="column is-half" >
                <div class="box content" style={{ height: '70%', maxWidth: "90%", margin: "5% 0", textAlign: "center" }}>

                  {movie.production_companies ? movie.production_companies.map((prod) => <h5>{prod.name}</h5>): ""} 

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movie
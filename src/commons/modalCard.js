import dateNormalization from "../utils/dateNormalization"
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import handleFavourites from "../utils/handleFavourites";

const ModalCard = ({ data, user, setUser, setActive }) => {

 const setColor = () => {
    if(user){
   if(user.favourites.length) return user.favourites.find((mov) => mov.movie_id == data.id)}
  }

  return (
    <div class="card">

       { user && <AiFillStar style={{ fontSize: "40px", position: "absolute", top: "2%", left: "90%", zIndex: "1", color: setColor() ? "gold" : "white" }} onClick={() => handleFavourites(data, setUser, user)} />}

      <div class="card-image">
        <figure class="image is-4by2">
          <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-center">
          </div>
          <div class="media-content">
            <p class="title is-3">{data.name ? `${data.name} (${data.original_name})` : `${data.title} (${data.original_title})`}</p>
            <p>{data.tagline}</p>
          </div>
        </div>

        <div class="content">
          Estreno: {data.first_air_date ? dateNormalization(data.first_air_date) : dateNormalization(data.release_date)}

          <p class="title is-5 is-box">Votos de la gente: {String(data.vote_average).slice(0,3)}%</p>
        </div>
        <p>{data.overview}</p>
        <Link to="/item">
          <a href="" onClick={() => setActive("")}>Leer mas...</a>
        </Link>
      </div>
    </div>

  )
}

export default ModalCard
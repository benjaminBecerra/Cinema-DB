import dateNormalization from "../utils/dateNormalization"
import { AiFillStar } from "react-icons/ai";
import handleFavourites from "../utils/handleFavourites";

const Card = ({ data, handleIdSearch, user, setUser }) => {

  const setColor = () => {
    if(user){
   if(user.favourites.length) return user.favourites.find((mov) => mov.movie_id == data.id)}
  }

  return (
    <div class="card" style={{ position: "relative" }}>

     {user && <AiFillStar style={{ fontSize: "30px", position: "absolute", top: "2%", left: "83%", zIndex: "1", color: setColor() ? "gold" : "white" }} onClick={() => handleFavourites(data, setUser, user)} />}

      <div class="card-image" onClick={() => handleIdSearch(data.id, data.name ? "tv" : 'movie')}>
        <figure class="image is-4by2">
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media" onClick={() => handleIdSearch(data.id, data.name ? "tv" : 'movie')}>
          <div class="media-content">
            <p class="title is-6">{data.name ? `${data.name} ` : `${data.title} `}</p>
          </div>
        </div>

        <div class="content" onClick={() => handleIdSearch(data.id, data.name ? "tv" : 'movie')}>
          {data.first_air_date ? dateNormalization(data.first_air_date) : data.release_date ? dateNormalization(data.release_date) : "Proximamente"}
          <p class="title is-5 mt-2"> Votos: {String(data.vote_average).slice(0, 3)}%</p>
        </div>
        <div style={{ textAlign: "center" }}>
        </div>
      </div>
    </div>

  )
}






export default Card
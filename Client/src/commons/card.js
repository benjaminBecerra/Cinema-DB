import dateNormalization from "../utils/dateNormalization"
import { AiFillStar, AiFillProfile, AiFillHeart } from "react-icons/ai";

const Card = ({ data, handleIdSearch }) => {

  return (
    <div class="card" onClick={() => handleIdSearch(data.id, data.name ? "tv" : 'movie')}>
      <div class="card-image">
        <figure class="image is-4by2">
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <p class="title is-6">{data.name ? `${data.name} ` : `${data.title} `}</p>
          </div>
        </div>

        <div class="content">
          {data.first_air_date ? dateNormalization(data.first_air_date) : dateNormalization(data.release_date)}
          <p class="title is-5">{data.vote_average}%</p>
          <p class='title is-5'>
            <AiFillHeart /> <AiFillProfile /> <AiFillStar />
          </p>
        </div>
      </div>
    </div>

  )
}






export default Card
import dateNormalization from "../utils/dateNormalization"
import { Link } from "react-router-dom";
import { AiFillStar, AiFillProfile, AiFillHeart } from "react-icons/ai";



const ModalCard = ({ data, setActive }) => {

  return (
    <div class="card">
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

        <p class='title is-4'>
          <AiFillHeart /> <AiFillProfile /> <AiFillStar />
        </p>

        <div class="content">
          Estreno: {data.first_air_date ? dateNormalization(data.first_air_date) : dateNormalization(data.release_date)}

          <p class="title is-5 is-box">Votos de la gente: {data.vote_average}%</p>
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
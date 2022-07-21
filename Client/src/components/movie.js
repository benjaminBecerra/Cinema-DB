import dateNormalization from "../utils/dateNormalization"

const Movie = (movie) => {

  let mov = movie.movie

  return (
    <section class="hero is-small is-primary">
      <div class="hero-body">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <img class="image is-2by4" src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} alt="" />
          </div>
          <div class="column is-two-thirds">
            <p class="title is-1">{mov.name ? `${mov.name} (${mov.original_name})` : `${mov.title} (${mov.original_title})`}</p>
            <div class="columns">
              <div class="column is-8">
                <p class="title is-6">{mov.genres.map(genre => genre.name + " - ")}{mov.runtime + " mins."}</p>
              </div>
              <div class="column is-4">
                <p class="title is-6"> Estreno: {mov.first_air_date ? dateNormalization(mov.first_air_date) : dateNormalization(mov.release_date)}</p>
              </div>
            </div>
            <div class="column is-full">
            </div>
            <div class="column is-full">
            </div>
            <div class="column is-full">
            </div>

            <div class="box">
              <div class="column is-half">
                <progress class="progress is-link" value={mov.vote_average} max="10"></progress>
              </div>
              <div class="column is-half content">
                <h3>Puntuacion de usuarios: {mov.vote_average} %</h3>
                <p>Cantidad de votos: {mov.vote_count}</p>
              </div>
            </div>
            <div class="column is-full">
            </div>
            <div class="column is-half is-offset-one-third">
              <p class="title is-5">{mov.tagline}</p>
            </div>
            <div class="column is-full">
            </div>
            <div class="column is-full"> <p class="title is-5">Vista general:</p>
              {mov.overview}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movie
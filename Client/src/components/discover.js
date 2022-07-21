import Grid from "./grid"

const Discover = ({ discover, handleIdSearch, handleMediaChange, media }) => {
  return (

    <div>

      <div class="columns">
        <div class="column is-10">
          <p class="title is-3">{'Descubre' + (media === "movie" ? " peliculas" : " series y TV")}</p>
        </div>
        <div class="column is-1">
          <button class={"button is-primary"} onClick={handleMediaChange}>{media === "movie" ? "TV" : "Pelicula"}</button>
        </div>
      </div>

      <Grid movies={discover} handleIdSearch={handleIdSearch} />
    </div>
  )
}

export default Discover
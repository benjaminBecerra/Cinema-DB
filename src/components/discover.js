import Grid from "./grid"

const Discover = ({ discover, handleIdSearch, handleMediaChange, media, user, setUser }) => {
  return (

    <div class="mt-5" id="discover">

      <div class="columns">
        <div class="column is-10">
          <p class="title is-3 ml-5" style={{color: "white"}}>{'Descubre' + (media === "movie" ? " peliculas" : " series y TV")}</p>
        </div>
        <div class="column is-1">
          <button class={"button is-primary"} onClick={handleMediaChange}>{media === "movie" ? "TV" : "Pelicula"}</button>
        </div>
      </div>

      <Grid movies={discover} handleIdSearch={handleIdSearch} user={user} setUser={setUser}/>
    </div>
  )
}

export default Discover
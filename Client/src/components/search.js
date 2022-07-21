import Grid from "./grid"
import NotFound from "./notFound"


const Search = ({ search, handleIdSearch }) => {

  return (

    search.length === 0 ? <NotFound />

      :

      <div>
        <p class="title is-3">  Tu busqueda: </p>
        <Grid movies={search} handleIdSearch={handleIdSearch} />
      </div>
  )
}

export default Search
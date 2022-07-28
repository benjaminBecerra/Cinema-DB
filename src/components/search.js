import Grid from "./grid"
import NotFound from "./notFound"


const Search = ({ search, handleIdSearch, user, setUser }) => {

  return (

    search.length === 0 ? <NotFound />

      :

      <div>
        <p class="title is-3 ml-5" style={{color: "white"}}>  Tu busqueda: </p>
        <Grid movies={search} handleIdSearch={handleIdSearch} user={user} setUser={setUser}/>
      </div>
  )
}

export default Search
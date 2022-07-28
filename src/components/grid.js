import Card from "../commons/card"

const Grid = ({ movies, handleIdSearch, user, setUser }) => {
  return (
    <div class="columns is-flex-wrap-wrap	is-justify-content-space-evenly" >
      {movies.map((movie, i) => (
        <div class="column is-2 mx-4" key={i}>
          <Card data={movie} handleIdSearch={handleIdSearch} user={user} setUser={setUser}/>
        </div>))}
    </div>
  )
}

export default Grid
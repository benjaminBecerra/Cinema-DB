import Card from "../commons/card"

const Grid = ({ movies, handleIdSearch }) => {
  return (
    <div class="columns is-multiline block">
      {movies.map((movie, i) => (
        <div class="column is-2" key={i}>
          <Card data={movie} handleIdSearch={handleIdSearch} />
        </div>))}
    </div>
  )
}

export default Grid
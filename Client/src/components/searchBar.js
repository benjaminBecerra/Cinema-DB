import { useState } from "react"
import { Link } from "react-router-dom";


const SearchBar = ({ handleSearch, search, setSearch }) => {

  const [input, setInput] = useState("")

  const setState = (e) => {
    setInput(e.target.value)
  }

  return (
    <section class='hero is-small'>
      <div class='hero-body'>
        <div class="columns">
          <div class="column is-1 is-offset-2">
            {search.length === 0 ? "" :
              <Link to="/">
                <button class="button is-primary" onClick={() => setSearch([])}> ← </button>
              </Link>}
          </div>
          <div class="column is-half">
            <form onSubmit={(e) => (e.preventDefault(), handleSearch(input))}>
              <input class="input is-primary" type="text" placeholder="Buscar" onChange={setState} />
            </form>
          </div>
          <div class="column is-1">
            <button class="button is-primary" onClick={(e) => (e.preventDefault(), handleSearch(input))}>BUSCAR</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SearchBar
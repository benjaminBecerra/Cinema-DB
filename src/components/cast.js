import CastCard from "../commons/castCard"

const Cast = ({ director, cast }) => {
  return (
<>
        <div class="columns m-4">
          <div class="column is-two-quarters is-offset-one-third">
            <p class="title is-1 media-right" style={{color: "white"}}> Reparto y Equipo: </p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-three-quarters" >
            <div class="columns is-multiline">
              {cast.map((people, i) => <div class="column is-3" key={i}>
                <CastCard data={people} />
              </div>)}
            </div>
          </div>
          <div class="column is-one-quarter">
            <div class="box mr-4">
              <CastCard data={director ? director : { name: "Director Not Found", job: "Director" }} />
            </div>
          </div>
        </div>
</>
  )
}

export default Cast
import CastCard from "../commons/castCard"

const Cast = ({ director, cast }) => {
  return (
    <section class="hero is-medium is-link">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-two-quarters is-offset-one-third">
            <p class="title is-1 media-right"> Reparto y Equipo: </p>
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
            <div class="box">
              <CastCard data={director ? director : { name: "Director Not Found", job: "Director" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cast
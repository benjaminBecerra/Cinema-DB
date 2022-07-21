import Grid from "./grid"

const Tendencias = ({ tendencia, handleIdSearch, handleTimeChange, time }) => {

  return (
    <div>
      <div class="columns">
        <div class="column is-10">
          <p class="title is-3">{'Tendencias de' + (time === "day" ? "l dia" : " la semana")}</p>
        </div>
        <div class="column is-1">
          <button class={"button is-primary"} onClick={handleTimeChange}>{time === "day" ? "Semana" : "Dia"}</button>
        </div>
      </div>
      <Grid movies={tendencia} handleIdSearch={handleIdSearch} />
    </div>
  )
}

export default Tendencias
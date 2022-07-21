const dateNormalization = (date) => {
  var meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ]
  let fecha = date.split("-")
  let yyy = fecha[0]
  let mes = ""
  if (fecha[1][0] === "0") {
    mes = fecha[1][1]
  } else {
    mes = fecha[1]
  }

  let dia = ""
  if (fecha[2][0] === "0") {
    dia = fecha[2][1]
  } else {
    dia = fecha[2]
  }

  var fechaFormateada = dia + ' de ' + meses[mes] + ' de ' + yyy;

  fecha = []

  return fechaFormateada
}

export default dateNormalization
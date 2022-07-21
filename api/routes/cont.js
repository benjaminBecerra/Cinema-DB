const express = require('express')
const contRoute = express.Router();

const axios = require('axios')

//Utils
const url = "https://api.themoviedb.org"
const key = "f04fb8a7a9e75b2565e4792323075a18"

//"Descubre" (TV o Peliculas)
contRoute.get(`/discover/:media`, (req, res, next) => {
  axios.get(`${url}/3/discover/${req.params.media}?api_key=${key}&language=es-ES&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`)
    .then(data => res.status(200).send(data.data))
    .catch(next)
})

//Tendencia (dia o semana)
contRoute.get(`/tendencia/:time`, (req, res, next) => {
  axios.get(`${url}/3/trending/all/${req.params.time}?api_key=${key}`)
    .then(data => res.status(200).send(data.data))
    .catch(next)
})

//Buscador
contRoute.get(`/search/:query`, (req, res, next) => {
  axios.get(`${url}/3/search/multi?api_key=${key}&language=es-ES&query=${req.params.query}&page=1&include_adult=false`)
    .then(data => res.status(200).send(data.data))
    .catch(next)
})

//Busca Por ID
contRoute.get(`/search/:media/:id`, (req, res, next) => {
  axios.get(`${url}/3/${req.params.media}/${req.params.id}?api_key=${key}&language=es-ES`)
    .then(data => res.status(200).send(data.data))
    .catch(next)
})

//Busca elenco y equipo
contRoute.get(`/search/crew/:media/:id`, (req, res, next) => {
  axios.get(`${url}/3/${req.params.media}/${req.params.id}/credits?api_key=${key}&language=es-ES`)
    .then(data => res.status(200).send(data.data))
    .catch(next)
})

module.exports = contRoute
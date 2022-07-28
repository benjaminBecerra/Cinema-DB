const express = require('express')
const userRoute = express.Router();

const User = require('../models/user')
const Favorites = require('../models/favourites')
const passport = require('passport')
const axios = require('axios')

//Utils
const url = "https://api.themoviedb.org"
const key = "f04fb8a7a9e75b2565e4792323075a18"

//Registrarse
userRoute.post("/register", function (req, res, next) {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch(err => console.log(err))
})

userRoute.get("/search/:id", function (req, res, next) {
  User.findAll({where: {id: req.params.id}, include: { model: Favorites }})
    .then((user) => res.status(200).send(user))
    .catch(err => console.log(err))
})


//Loguear
userRoute.post('/login', passport.authenticate('local'), function 
(req, res, next) {
  res.status(200).json(req.user)
});

//Desloguear
userRoute.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.sendStatus(200);
  });
});

//Pide Key de sesion invitado
userRoute.post("/guest", (req,res,next) => {
  axios.post(`${url}/3/authentication/guest_session/new?api_key=${key}`)
  .then(data => res.status(200).send(data.data))
  .catch(next)
})

userRoute.post("/favs", (req,res,next) => {
  Favorites.create(req.body)
  .then(data => res.status(200).send(data.data))
  .catch(next)
})

userRoute.delete("/deletefavs", (req,res,next) => {
   Favorites.destroy({where: req.body})
  .then(data => res.status(200).send(data.data))
  .catch(next)
}) 


module.exports = userRoute
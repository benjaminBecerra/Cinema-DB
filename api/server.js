// Configuración del server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require ('express-session')
const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy;
const volleyball = require("volleyball");
const db = require("./config/db");
const routes = require("./routes");

const User = require("./models/user")

const app = express();


app.use(express.json());

app.use(cors());


// logging middleware
app.use(volleyball);

app.use(express.static("build"));

// parsing middleware




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sessions({ 
            secret: "bootcamp", 
            resave: true,
            saveUninitialized: true,
             cookie : {
    expires: false
  }
}))

app.use(passport.initialize());
app.use(passport.session());



passport.use(
 new LocalStrategy(
   {
     usernameField: "email",
     passwordField: "password",
   },
   function (email, password, done) {
     User.findOne({where:{email}})
    .then((user)=>{
    if(!user){
    return done(null,false);
  }
  user.hash(password,user.salt).then((hash)=>{
    if(hash !== user.password){
    return done(null,false);
    }
    done(null, user);
  })
  })
  .catch(done);
   }
 )
);

// How we save the user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// How we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
});

app.use("/api", routes);

/* app.use("/api", (req, res) => {
  res.sendStatus(404);
}); */

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

db.sync({ force: false }).then(() => {
  app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
});
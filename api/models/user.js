const s = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const Favorites = require('./favourites')

class User extends s.Model { hash(password,salt){return bcrypt.hash(password, salt)} }

User.init(
  {
    email: {
      type: s.STRING,
      allowNull: false,
      validate:{
      isEmail: true
      }
    },
    password: {
      type: s.STRING,
      allowNull: false,
    },
    salt: {
      type: s.STRING,
    }
  },
  { sequelize: db, modelName: 'users' }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});


User.hasMany(Favorites)
Favorites.belongsTo(User)

  module.exports = User

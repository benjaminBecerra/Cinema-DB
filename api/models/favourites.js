const s = require('sequelize');
const db = require('../config/db');

class Favorites extends s.Model{}
Favorites.init(
  {
    movie_id: {
      type: s.STRING,
      allowNull: false,
    },
     movie_media: {
      type: s.STRING,
      allowNull: false,
    }
  },
  { sequelize: db, modelName: 'favourites' }
);

  module.exports = Favorites
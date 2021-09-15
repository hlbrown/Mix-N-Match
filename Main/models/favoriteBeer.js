const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class FavoriteBeer extends Model {}

FavoriteBeer.init(
  {
    id: {
        type: DataTypes.INTEGER,
      },
      user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id',
          },
      },
      favorite_beer: {
          type: DataTypes.STRING,
          references: {
              model: 'beers',
              key: 'id',
          },
        },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'favoriteBeer'
  }
);

module.exports = FavoriteBeer;

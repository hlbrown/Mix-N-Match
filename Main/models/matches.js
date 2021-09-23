const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Matches extends Model {}

Matches.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    liker: {
      type: DataTypes.BOOLEAN
    },
    likee: {
      type: DataTypes.BOOLEAN,
    },
    
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'matches'
  }

);

module.exports = Matches;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Gender extends Model {}

Gender.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'gender'
  }

);

module.exports = Gender;

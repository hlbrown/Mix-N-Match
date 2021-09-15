const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const InterestedInGender = require('./interestedInPronoun');

// Create a new Sequelize model for books
class interestedInRelation extends Model {}

interestedInRelation.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
      },
      user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id',
          },
      },
      relationshipType_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'relationshipType',
              key: 'id'
          }
      }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'interestedInRelation'
  }
);

module.exports = interestedInRelation;

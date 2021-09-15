const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class InterestedInPronoun extends Model {}

InterestedInPronoun.init(
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
    pronoun_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pronoun',
            key: 'id',
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'interestedInpronoun'
  }
);

module.exports = InterestedInPronoun;

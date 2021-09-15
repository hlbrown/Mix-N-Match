const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class InterestedInGender extends Model {}

InterestedInGender.init(
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
    gender_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'gender',
            key: 'id',
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'interestedInGender'
  }
);

module.exports = InterestedInGender;

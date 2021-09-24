const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Notification extends Model { }
Notification.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {//target Id
            type: DataTypes.INTEGER,
        },
        sender_id: {//current user id
            type: DataTypes.INTEGER,
        },
        sender_firstName: {//current user first_name
            type: DataTypes.STRING,
        },
        sender_lastName: {//current user last_name
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'notification',
        
    }//closing of sequelize brackets
);

module.exports = Notification;
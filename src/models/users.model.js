const { DataTypes } = require('sequelize');
const db = require('../utils/connection');
const path = require('path');

const avatar = path.resolve('default_avatar.png')

const User = db.define("users", {
    userName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: "user_name"
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING(150),
        field: "first_name"
    },
    lastName: {
        type: DataTypes.STRING(150),
        field: "last_name"
    },
    avatar_url: {
        type: DataTypes.STRING,
        defaultValue: avatar
    }
}, {
    timestamps: false
});

module.exports = User;
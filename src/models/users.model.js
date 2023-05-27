const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

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
    passwords : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
            length: { min: 6}
        }
    },
    firstName: {
        type: DataTypes.STRING(150),
        field: "first_name"
    },
    lastName: {
        type: DataTypes.STRING(150),
        field: "last_name"
    }
}, {
    timestamps: false
});

module.exports = User;
const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

const ChatType = db.define("chat_types", {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = ChatType;
const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

const ChatParticipants = db.define("chat_participants", {
    chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "chat_id",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    }
}, {
    timestamps: false
});

module.exports = ChatParticipants;
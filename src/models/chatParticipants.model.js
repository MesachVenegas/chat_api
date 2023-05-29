const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

const ChatParticipant = db.define("chat_participants", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "chat_id"
    }
}, {
    timestamps: false,
});

module.exports = ChatParticipant;
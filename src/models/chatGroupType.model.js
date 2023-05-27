const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

const ChatGroupType = db.define("chats_by_type", {
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

module.exports = ChatGroupType;
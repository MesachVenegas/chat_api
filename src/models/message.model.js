const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

const Message = db.define("messages", {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'created_by'
    },
    chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'chat_id'
    }
}, {
    timestamps: true,
    createdAt: 'sended_at'
});

module.exports = Message;
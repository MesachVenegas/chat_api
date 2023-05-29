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
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'send_at'
    }
}, {
    timestamps: false,
});

module.exports = Message;
const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

const Chat = db.define("chats", {
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    chatType: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 1,
        field: "type_id"
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "created_by"
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Chat;
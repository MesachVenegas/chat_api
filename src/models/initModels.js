const ChatGroupType = require('./chatGroupType.model');
const ChatType = require('./chatType.model');
const Message = require('./message.model');
const User = require('./users.model');
const Chat = require('./chat.model');

const initModels = () => {
    // Un Chat pertenece a un usuario y un usuario tiene una o muchos Chats.
    Chat.belongsTo(User, { foreignKey: 'createdBy'});
    User.hasMany(Chat, { foreignKey: 'createdBy'});

    // Un mensaje pertenece a un usuario y un usuario tiene uno o muchos mensajes.
    Message.belongsTo(User, { foreignKey: 'createdBy'});
    User.hasMany(Message, { foreignKey: 'createdBy'});

    // Un Mensaje pertenece a un Chat y un Chat tiene uno o muchos mensajes.
    Message.belongsTo(Chat, { foreignKey: 'chatId'});
    Chat.hasMany(Message, { foreignKey: 'chatId'});

    // Un tipo de chat pertenece a un chat y un chat tiene un tipo de chat.
    ChatType.belongsTo(Chat, { foreignKey: 'chatType'});
    Chat.hasOne(ChatType, { foreignKey: 'chatType'});

    // Un Usuario pertenece a uno o muchos Chats y un Chat puede tener uno o muchos usuarios.
    User.belongsToMany(Chat, { foreignKey: 'userId', through: ChatGroupType});
    Chat.belongsToMany(User, { foreignKey: 'chatId', through: ChatGroupType});
}

module.exports = initModels;

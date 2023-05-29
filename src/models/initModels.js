const ChatParticipant = require('./chatParticipants.model');
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

    // Un tipo de chat pertenece a un chat y un chat tiene un tipo.
    ChatType.hasOne(Chat, { foreignKey: 'typeId'});
    Chat.belongsTo(ChatType, { foreignKey: 'typeId'});

    // Un Usuario es un participant de uno o mas chats y un chat tiene un participante
    ChatParticipant.belongsTo(User, { foreignKey: 'userId'});
    ChatParticipant.belongsTo(Chat, { foreignKey: 'chatId'});
}

module.exports = initModels;

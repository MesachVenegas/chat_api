const ChatType = require('../models/chatType.model');
const Message = require('../models/message.model');
const User = require('../models/users.model');
const Chat = require('../models/chat.model');

class ChatService {

    static async createChat(data, addressed) {
        try {
            const chat = await Chat.create(data);
            const participant = await User.findByPk(addressed)
            chat.addUser(participant);
            return chat;
        } catch (error) {
            throw error;
        }
    }

    static async createGroup(data, participants) {
        try {
            const groupChat = await Chat.create(data);
            return groupChat;
        } catch (error) {
            throw error;
        }
    }


    static async getUserChats (id) {
        try {
            const chats = await Chat.findAll({
                where: { createdBy: id },
                attributes: {
                    exclude: ['createdBy', 'typeId'],
                },
                include:{
                    model: ChatType,
                    attributes: {
                        exclude: ['id']
                    }
                }
            })
            return chats;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id){
        try {
            const result = Chat.destroy({ where: id})
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getChatParticipants(id) {
        try {
            const chat = await Chat.findByPk(id, {
                attributes: { exclude: ['createdBy', 'typeId']},
                include: [
                    {
                        model: User,
                        attributes: { exclude: ['password']},
                        // through: { attributes: []}
                    },
                    {
                        model: Message,
                        attributes: { exclude: ['createdBy', 'chatId']},
                        include: [
                            {
                                model: User,
                                attributes: { exclude: ['password'] }
                            }
                        ]
                    },
                ]
            });
            return chat;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ChatService;
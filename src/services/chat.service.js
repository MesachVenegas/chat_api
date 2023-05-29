const ChatParticipant = require('../models/chatParticipants.model');
const ChatType = require('../models/chatType.model');
const Message = require('../models/message.model');
const User = require('../models/users.model');
const Chat = require('../models/chat.model');

class ChatService {

    static async createChat(data, addressed,) {
        try {
            const chat = await Chat.create(data);
            const relations = [
                { chatId: chat.id, userId: chat.createdBy },
                { chatId: chat.id, userId: addressed },
            ]
            await Promise.all(relations.map(async data => {
                ChatParticipant.create(data);
            }))
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


    static async getUserChats(id) {
        try {
            const chats = await Chat.findAll({
                where: { createdBy: id },
                attributes: {
                    exclude: ['createdBy', 'typeId'],
                },
                include: {
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

    static async delete(id) {
        try {
            const result = Chat.destroy({ where: id })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getChatParticipants(id) {
        try {
            const chat = await Chat.findByPk(id, {
                attributes: {
                    exclude: ['typeId', 'createdBy']
                },
                include: [
                    {
                        model: ChatType
                    },
                    {
                        model: User,
                        attributes: { exclude: ['password']}
                    },
                    {
                        model: Message
                    }
                ]
            });
            const participants = await ChatParticipant.findAll({
                where: { chatId: id },
                attributes: { exclude: ['userId', 'chatId', 'id']},
                include:[
                    {
                        model: User,
                        attributes: { exclude: ['password']}
                    }
                ]
            });
            return {
                chat, participants
            };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ChatService;
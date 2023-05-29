const ChatGroupType = require('../models/chatGroupType.model');
const ChatType = require('../models/chatType.model');
const Message = require('../models/message.model');
const User = require('../models/users.model');
const Chat = require('../models/chat.model');

class ChatService {

    static async createChat(data, addressed) {
        try {
            console.log(data);
            const chat = await Chat.create(data);
            const message = [
                { chatId: chat.id, userId: chat.createdBy },
                { chatId: chat.id, userId: addressed }
            ]
            await Promise.all(message.map(async data => {
                await ChatGroupType.create(data)
            }))
            return chat;
        } catch (error) {
            throw error;
        }
    }

    static async createGroup(data, participants) {
        try {
            const groupChat = await Chat.create(data);

            const message = [
                { chatId: groupChat.id, userId: groupChat.createdBy },
            ]

            participants.forEach(participant => {
                message.push({ chatId: groupChat.id, userId: participant})
            })
            console.log(message);

            await Promise.all(message.map(async data => {
                await ChatGroupType.create(data)
            }))

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
                    exclude: ['createdBy', 'chatType'],
                },
                include: [
                    {
                        model: ChatType
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ['password']
                        }
                    },
                    {
                        model: Message
                    }
                ]
            })
            return chats;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ChatService;
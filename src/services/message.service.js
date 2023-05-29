const Message = require('../models/message.model');
const User = require('../models/users.model');
const Chat = require('../models/chat.model');

class MessageService {

    static async getMessages() {
        try {
            const result = await Message.findAll({
                attributes: {
                    exclude: ['createdBy', 'chatId']
                },
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ['password']
                        }
                    },
                    {
                        model: Chat,
                        attributes: {
                            exclude: ['typeId', 'createdBy']
                        }
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createMessage(data) {
        try {
            const result = await Message.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async removeMessage(id) {
        try {
            const result = await Message.destroy({ where: { id: id } });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MessageService;
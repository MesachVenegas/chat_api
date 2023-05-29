const MessageService = require('../services/message.service');

const getAllMessages = async (req, res, next) => {
    try {
        const result = await MessageService.getMessages();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const createNewMessage = async (req, res, next) => {
    try {
        const { chatId } = req.params;
        const { content, createdBy} = req.body;
        await MessageService.createMessage({ content, createdBy, chatId });
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const deleteMessage = async (req, res, next) => {
    try {
        const { id } = req.params;
        await MessageService.removeMessage(id);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getAllMessages,
    createNewMessage,
    deleteMessage
}
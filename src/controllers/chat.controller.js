const ChatService = require('../services/chat.service');

const createNewCoupleChat = async (req, res, next) => {
    try {
        const {title, createdBy, addressed} = req.body;
        await ChatService.createChat({title, createdBy}, addressed);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const createNewGroupChat = async (req, res, next) => {
    try {
        const {title ,createdBy, participants} = req.body;
        await ChatService.createGroup({title, typeId : 2 ,createdBy}, participants);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const getAllChatsByUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await ChatService.getUserChats(id);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const getChatParticipantsWithMessages = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await ChatService.getChatParticipants(id);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const deleteChat = async (req, res, next) => {
    try {
        const { id } = req.params;
        await ChatService.delete(id);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getChatParticipantsWithMessages,
    createNewCoupleChat,
    createNewGroupChat,
    getAllChatsByUser,
    deleteChat
};

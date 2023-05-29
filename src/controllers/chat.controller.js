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

module.exports = {
    createNewCoupleChat,
    createNewGroupChat,
    getAllChatsByUser
};

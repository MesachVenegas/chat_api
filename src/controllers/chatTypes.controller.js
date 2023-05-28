const ChatTypesService = require('../services/chatTypes.service');

const getAllChatTypes = async (req, res, next) => {
    try {
        const result = await ChatTypesService.getTypes();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const createNewType = async (req, res, next) => {
    try {
        const type = req.body;
        await ChatTypesService.createType(type);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const updateType = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newType = req.body;
        await ChatTypesService.updateType(id, newType);
        res.status(202).send();
    } catch (error) {
        next(error);
    }
}

const deleteType = async (req, res, next) => {
    try {
        const { id } = req.params;
        await ChatTypesService.delete(id);
        res.status(204).send();
    } catch (error) {
        next(next);
    }
}

module.exports = {
    getAllChatTypes,
    createNewType,
    deleteType,
    updateType
};

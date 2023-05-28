const ChatType = require("../models/chatType.model");

class ChatTypesService {

    static async getTypes() {
        try {
            const result = await ChatType.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createType(data) {
        try {
            const result = await ChatType.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async updateType(id, data) {
        try {
            const result = await ChatType.update(data, { where: { id: id } });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await ChatType.destroy({ where: { id: id } });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ChatTypesService;
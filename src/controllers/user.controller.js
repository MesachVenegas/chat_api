const UserService = require('../services/users.service');
const bcrypt = require('bcrypt');

const registerNewUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const hashed = await bcrypt.hash(password, 10);
        await UserService.createUser({ userName, email, password: hashed });
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await UserService.login(email, password);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateProfile = async (req, res) => {
    try {
        const data = req.body;
        const response = await UserService.updateData(data);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    registerNewUser,
    updateProfile,
    userLogin
};

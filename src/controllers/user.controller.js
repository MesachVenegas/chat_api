const UserService = require('../services/users.service');
const bcrypt = require('bcrypt');
const path = require('path');

const registerNewUser = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body;
        const hashed = await bcrypt.hash(password, 10);
        await UserService.createUser({ userName, email, password: hashed });
        res.status(201).send();
    } catch (error) {
        next(error)
    }
}

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const response = await UserService.login(email, password);
        res.status(200).json(response)
    } catch (error) {
        next(error);
    }
}

const updateProfile = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        await UserService.updateData(id, data);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

const updateAvatar = async (req, res, next) => {
    try {
        const { id } = req.params;

        if(req.files === undefined){
            return;
        }
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).json("No files were uploaded");
        }
        const file = req.files.avatar;
        const uploadPath = path.join(__dirname,'../..', 'public', file.name);

        file.mv(uploadPath, async (error) => {
            if(error){
                next(error);
            }

            await UserService.loadAvatar(id, uploadPath)
            res.status(202).json("File uploaded successfully");
        })

    } catch (error) {
        next(error);
    }
}

const getContacts = async (req, res, next) => {
    try {
        const response = await UserService.getAllUsers();
        res.status(200).json(response)
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getContacts,
    registerNewUser,
    updateProfile,
    updateAvatar,
    userLogin
};

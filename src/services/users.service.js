const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService {

    static async createUser(data) {
        try {
            const newUser = await User.create(data);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    static async login(reqEmail, reqPassword) {
        try {
            const user = await User.findOne({ where: { email: reqEmail } });
            if (!user) {
                return {
                    error: 'User not found',
                    errorMessage: 'The email address don\'t match'
                }
            }

            const validPassword = await bcrypt.compare(reqPassword, user.password);
            if (!validPassword) {
                return {
                    error: 'Invalid password',
                    errorMessage: 'The password don\'t match'
                }
            }
            const { id, firstName, lastName, userName, email } = user;

            const userData = { id, firstName, lastName, userName, email }
            const token = jwt.sign(userData, process.env.JWT_KEYWORD, {
                algorithm: process.env.JWT_ALGORITHM,
                expiresIn: '1h'
            });

            userData.token = token;

            return userData;
        } catch (error) {
            throw error;
        }
    }

    static async updateData(id, data) {
        try {
            const result = await User.update(data, {
                where: { id: id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async loadAvatar(id, url) {
        try {
            const user = await User.findByPk(id);
            const result = await user.update({ avatar_url: url });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers() {
        try {
            const result = await User.findAll({
                attributes: {
                    exclude: ['password']
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;
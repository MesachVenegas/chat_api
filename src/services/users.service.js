const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService {

    static async createUser(data) {
        try {
            const newUser = await User.create(data);
            return newUser;
        } catch (error) {
            return error;
        }
    }

    static async userLogin(reqEmail, reqPassword) {
        try {
            const user = await User.findOne({ where: { email: reqEmail } });
            if(!user) {
                return {
                    error: 'User not found',
                    errorMessage: 'The email address don\'t match'
                }
            }

            const validPassword = await  bcrypt.compare(reqPassword, user.password);
            if(!validPassword) {
                return {
                    error: 'Invalid password',
                    errorMessage: 'The password don\'t match'
                }
            }
            const {firstName, lastName, userName, email } = user;

            const userData = { firstName, lastName, userName, email }
            const token = jwt.sign(userData, process.env.JWT_LOGIN_KEYWORD, {
                algorithm: process.env.JWT_ALGORITHM,
                expiresIn: '1h'
            });

            userData.token = token;

            return userData;
        } catch (error) {
            throw error;
        }
    }

    static async updateProfile(data){
        try {
            const result = await User.update(data);
            return result;
        } catch (error) {
            return error;
        }

    }

}

module.exports = UserService;
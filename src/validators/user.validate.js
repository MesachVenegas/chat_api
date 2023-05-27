const validateFields = require('../utils/fieldsValidate');
const { check } = require('express-validator');

const validateUserCreate = [
    check('userName', 'erro on field username')
        .exists().withMessage('the username field did not exist')
        .trim().notEmpty().withMessage('the username field cannot be empty')
        .isString().withMessage('the username field must be a string')
        .isLength({ min: "5", max: "100" }).withMessage("The username field must be at least 5 characters"),
    check('email', 'erro on field email')
        .exists().withMessage('the email field does not exist')
        .trim().notEmpty().withMessage('the email field cannot be empty')
        .isString().withMessage('the email field must be a string')
        .isEmail().withMessage('the email is invalid'),
    check('password', 'erro on field password')
        .exists().withMessage('the password field does not exist')
        .trim().notEmpty().withMessage('the password field cannot be empty')
        .isString().withMessage('the password field must be a string')
        .isLength({ min: "6" }).withMessage('the password field must be at least 6 characters'),
    (req, res, next) => {
        validateFields(req, res, next);
    }
]

module.exports = {
    validateUserCreate
}
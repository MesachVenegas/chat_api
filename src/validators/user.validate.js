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

const loginValidation = [
    check('email', 'Error on email')
        .exists().withMessage("The email field don't exist")
        .notEmpty().withMessage("The email cannot be empty")
        .isString().withMessage("The email must be a string")
        .isEmail().withMessage("Email Invalid"),
    check('password', 'Error en password')
        .exists().withMessage("The password field don't exist")
        .notEmpty().withMessage("The password field cannot be empty")
        .isString().withMessage("The password must be a string")
        .isLength({ min: "6" }).withMessage("The password will be 6 characters minimun"),
    (req, res, next) => {
        validateFields(req, res, next);
    }
]

module.exports = {
    validateUserCreate,
    loginValidation
}
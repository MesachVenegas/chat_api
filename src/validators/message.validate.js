const validateFields = require("../utils/fieldsValidate");
const { check } = require('express-validator');


const validateCreateMessage = [
    check('content', "error with content field")
        .exists().withMessage('the content field did not exist')
        .trim().notEmpty().withMessage('the content field cannot be empty')
        .isString().withMessage('the content field must be a string'),
    check('createdBy', "error with createdBy field")
        .exists().withMessage('the createdB field did not exist')
        .trim().notEmpty().withMessage('the createdBy field must cannot be empty')
        .isNumeric().withMessage('the createdBy field must be a number'),
    check('chatId', "error with chatId field")
        .exists().withMessage('the chatId field did not exist')
        .trim().notEmpty().withMessage('the chatId field must cannot be empty')
        .isNumeric().withMessage('the chatId field must be a number'),
    (req, res, next) => {
        validateFields(req, res, next);
    }
]

module.exports = {
    validateCreateMessage
};

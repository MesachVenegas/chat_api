const validateFields = require('../utils/fieldsValidate');
const { check } = require('express-validator');


const validateCreateChat = [
    check('title', 'error on title field')
        .exists().withMessage('the title field did not exist')
        .trim().notEmpty().withMessage('the title field cannot be empty')
        .isString().withMessage('the title field must be a string'),
    check('createdBy', 'error on createdBy field')
        .exists().withMessage('the createdBy fiel did not exist')
        .trim().notEmpty().withMessage('the createdBy fiel cannot be empty')
        .isNumeric().withMessage('the createdBy fiel must be a number'),
    check('addressed', 'error on addressed field')
        .exists().withMessage('the addressed fiel did not exist')
        .trim().notEmpty().withMessage('the addressed fiel cannot be empty')
        .isNumeric().withMessage('the addressed fiel must be a number'),
    (req, res, next) => {
            validateFields(req, res, next);
    }
]

const validateCreateGroup = [
    check('title', 'error on title field')
        .exists().withMessage('the title field did not exist')
        .trim().notEmpty().withMessage('the title field cannot be empty')
        .isString().withMessage('the title field must be a string'),
    check('createdBy', 'error on createdBy field')
        .exists().withMessage('the createdBy fiel did not exist')
        .trim().notEmpty().withMessage('the createdBy fiel cannot be empty')
        .isNumeric().withMessage('the createdBy fiel must be a number'),
    (req, res, next) => {
        validateFields(req, res, next);
    }
]

module.exports = {
    validateCreateChat,
    validateCreateGroup
};
const validateFields = require('../utils/fieldsValidate');
const { check } = require('express-validator');

const validateNewType = [
    check('name', "error with name field ")
        .exists().withMessage('the name field did not exist')
        .trim().notEmpty().withMessage('the name field cannot be empty')
        .isString().withMessage('the name field must be a string')
        .isAlpha().withMessage('the name field must be only letters with out spaces'),
    (req, res, next) => {
        validateFields(req, res, next);
    }
]

module.exports = validateNewType;
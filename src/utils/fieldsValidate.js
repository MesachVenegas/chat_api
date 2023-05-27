const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(400).json(error);
        // next({
        //     status: 400,
        //     name: "validation error",
        //     message: error.array().map(error => error.msg)
        // });
    }
}

module.exports = validateFields;
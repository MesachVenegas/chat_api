const { Router } = require('express');
const {
    registerNewUser,
    userLogin,
    updateProfile
} = require('../controllers/user.controller');
const { validateUserCreate } = require('../validators/user.validate');

const router = Router();

router.post('/users/register', validateUserCreate , registerNewUser);

module.exports = router
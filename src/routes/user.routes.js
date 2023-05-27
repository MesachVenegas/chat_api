const { Router } = require('express');
const { registerNewUser, userLogin, updateProfile } = require('../controllers/user.controller');
const { validateUserCreate, loginValidation } = require('../validators/user.validate');

const router = Router();

router.post('/users/register', validateUserCreate, registerNewUser);

router.post('/users/login', loginValidation, userLogin)

module.exports = router
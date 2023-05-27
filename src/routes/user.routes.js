const { Router } = require('express');
const { registerNewUser, userLogin, updateProfile, updateAvatar } = require('../controllers/user.controller');
const { validateUserCreate, loginValidation, updateValidation } = require('../validators/user.validate');
const userAuth = require('../middlewares/auth.middleware');

const router = Router();

router.post('/users/register', validateUserCreate, registerNewUser);

router.post('/users/login', loginValidation, userLogin)

router.post('/users/:id', userAuth, updateValidation, updateProfile)

router.post('/users/profile/avatar/:id', userAuth ,updateAvatar)

module.exports = router
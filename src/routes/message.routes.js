const { getAllMessages, createNewMessage, deleteMessage } = require('../controllers/message.controller');
const { Router } = require('express');
const { validateCreateMessage } = require('../validators/message.validate');
const userAuth = require('../middlewares/auth.middleware');

const router = Router();

router.get('/messages', userAuth, getAllMessages);

router.post('/chats/:chatId/messages', validateCreateMessage, userAuth, createNewMessage);

router.delete('/messages/:id',  deleteMessage);

module.exports = router
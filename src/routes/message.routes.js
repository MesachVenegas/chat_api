const { getAllMessages, createNewMessage, deleteMessage } = require('../controllers/message.controller');
const { Router } = require('express')

const router = Router();

router.get('/messages',  getAllMessages);

router.post('/chats/:chatId/messages', createNewMessage);

router.delete('/messages/:id', deleteMessage);

module.exports = router
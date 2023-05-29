const { createNewCoupleChat, createNewGroupChat, getAllChatsByUser } = require('../controllers/chat.controller');
const { Router } = require('express')

const router = Router();

router.post('/chats', createNewCoupleChat);

router.post('/chats/group', createNewGroupChat);

router.get('/chats/:id', getAllChatsByUser);

module.exports = router
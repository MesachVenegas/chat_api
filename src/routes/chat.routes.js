const { createNewCoupleChat, createNewGroupChat, getAllChatsByUser, getChatParticipantsWithMessages, deleteChat } = require('../controllers/chat.controller');
const userAuth = require('../middlewares/auth.middleware');
const { validateCreateChat, validateCreateGroup } = require('../validators/chat.validate');
const { Router } = require('express');

const router = Router();

router.post('/chats', validateCreateChat, userAuth, createNewCoupleChat);

router.post('/chats/group', validateCreateGroup, userAuth, createNewGroupChat);

router.get('/chats/:id', userAuth, getAllChatsByUser);

router.get('/chats/:id/details', userAuth, getChatParticipantsWithMessages);

router.delete('/chats/:id', userAuth, deleteChat);

module.exports = router
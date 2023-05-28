const { createNewType, deleteType, updateType, getAllChatTypes } = require('../controllers/chatTypes.controller');
const validateNewType = require('../validators/types.validate');
const { Router } = require('express')

const router = Router();

router.get('/types', getAllChatTypes);

router.post('/types', validateNewType, createNewType);

router.put('/types/:id', validateNewType, updateType);

router.delete('/types/:id', deleteType);

module.exports = router
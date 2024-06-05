const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


const geminiController = require('../controllers/geminiController');
router.post ('/chat', chatController.getResponseChat);
router.post('/gemini', geminiController.getResponseChatGemini);

module.exports = router; 
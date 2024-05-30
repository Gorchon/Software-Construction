const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post ('/chat', chatController.getResponseChat);

module.exports = router; // we export the router so we can use it in the index.js file
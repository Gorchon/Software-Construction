const express = require('express');
const router = express.Router();
const feedBackController = require('../controllers/feedBackController');

router.get('/:id', feedBackController.getFeedBackById); //we set as the root of the route the function getAllUsers from the userController because we want to get all the users from the database  
router.post('/:userId', feedBackController.createFeedBack); //we set as the root of the route the function createUser from the userController because we want to create a new user in the database


module.exports = router; // we export the router so we can use it in the index.js file

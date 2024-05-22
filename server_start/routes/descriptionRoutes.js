const express = require('express');
const router = express.Router();
const descriptionController = require('../controllers/descriptionControllers');

router.get('/:id', descriptionController.getDescriptionById); //we set as the root of the route the function getAllUsers from the userController because we want to get all the users from the database  

module.exports = router; // we export the router so we can use it in the index.js file
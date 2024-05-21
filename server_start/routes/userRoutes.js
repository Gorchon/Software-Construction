// this

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers); //we set as the root of the route the function getAllUsers from the userController because we want to get all the users from the database
router.get('/:id', userController.getUserById); // we set as the root of the route the function getUserById from the userController because we want to get a user by id from the database
router.post('/', userController.createUser); // we set as the root of the route the function createUser from the userController because we want to create a user in the database
router.put('/:id', userController.updateUser); // we set as the root of the route the function updateUser from the userController because we want to update a user by id in the database
router.delete('/:id', userController.deleteUser); // we set as the root of the route the function deleteUser from the userController because we want to delete a user by id from the database


module.exports = router; // we export the router so we can use it in the index.js file



// this file will be used  to sttore the info of the queries  and the functions that will be used to get the data from the database

const UserModel = require('../models/userModel');

async function getAllUsers(req, res) {
    // const users = await getAllUsers();
    // res.status(200).json(users);
    try{
        const users = await UserModel.getAllUsers();
        res.json(users);
        
   
    }catch (err ){
    
        res.status(500).send('sos gilipollas ');
        console.log('This is an error', err);
    }


}

async function getUserById(req, res) {
    const {id} = req.params;
    console.log('id', id);

    try{
        const user = await UserModel.getUserById(id);
        res.json(user);
    } catch (err) {
        res.status(500).send('sos gilipollas lol');
        console.log('This is an error in create user by id', err);
    }
}

async function createUser(req, res) {
    const user = req.body;
    console.log('user', user);

    try{
        const newUser = await UserModel.createUser(user);
        res.json(newUser);
    } catch (err) {
        res.status(500).send('sos gilipollas ');
        console.log('Error in create user', err);
    }
}

async function updateUser(req, res) {
    const {id} = req.params;
    const user = req.body;

    try {
        const updatedUser = await UserModel.updateUser(id, user);
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send('sos gilipollas ');
        console.log('Error updating user', err);
    }
}

async function deleteUser(req, res) {
    const {id} = req.params;

    try {
        await UserModel.deleteUser(id);
        res.json({message: 'User deleted'});
    } catch (err) {
        res.status(500).send('sos gilipollas ');
        console.log('Error deleting user', err);
    }
}


module.exports = {getAllUsers, getUserById, createUser, updateUser, deleteUser}
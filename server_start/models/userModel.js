// this model will got all the queries to the database 

const {db} = require('../config/db')

const getAllUsers = async () => {
    const query = 'SELECT * FROM users ORDER BY id ASC';
    const { rows } = await db.query(query);
    return rows;
}

const getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    return rows[0];
}

const createUser = async (user) => {
    try {
  
        const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
        const { rows } = await db.query(query, [user.name, user.email]);    
        return rows[0];
   
}catch (err) {
    console.log('This is an error', err);
    return err;
}
}

const updateUser = async (id, user) => {
    try {
        const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
        const { rows } = await db.query(query, [user.name, user.email, id]);
        return rows[0];
    } catch (err) {
        console.log('Error updating user', err);
        return err;
    }
}

const deleteUser = async (id) => {
    try {
        const query = 'DELETE FROM users WHERE id = $1';
        await db.query(query, [id]);
        return `User with id ${id} has been deleted`;
    } catch (err) {
        console.log('Error deleting user', err);
        return err;
    }
} 


module.exports = {getAllUsers, getUserById, createUser}
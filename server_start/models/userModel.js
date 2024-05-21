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

module.exports = {getAllUsers, getUserById, createUser}
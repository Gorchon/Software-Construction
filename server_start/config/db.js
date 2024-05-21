const { Pool } = require("pg"); // Import the Pool class from the pg module

const db = new Pool({ // Use the Pool class to create a new pool
    user: "tortasdepollo",
    password :'password',
    host : 'localhost',
    port : 5432,
    database : 'tortasdepollostack'
});

module.exports = { db }; 
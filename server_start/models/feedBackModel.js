const { db} = require('../config/db');

const getFeedBackById = async (id) => {
    try {
        const query = 'SELECT U.name,  d. FeedBack FROM users U JOIN FeedBack d ON U.id = d.userd_id WHERE U.id = $1;';
        const { rows } = await db.query(query, [id]);
        return rows;
    } catch (err) {
        console.log('Error getting FeedBack by id', err);
        throw new Error(err);
    }

}

//  `
const createFeedBack = async ( feedBack, userId) => {
    try {
        const query = " INSERT INTO feedBack (feedback, userd_id) VALUES ($1, $2) RETURNING *;";
        const { rows } = await db.query(query, [feedBack, userId]);
        return rows[0];
    } catch (err) {
        console.log('Error creating FeedBack', err);
        throw new Error(err);
    }
}

module.exports = { getFeedBackById, createFeedBack };
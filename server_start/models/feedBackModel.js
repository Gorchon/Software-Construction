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

module.exports = { getFeedBackById };
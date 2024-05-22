const feedBackModel = require("../models/feedBackModel");

async function getFeedBackById(req, res) {
    const { id } = req.params;

    try {
        const feedBack = await feedBackModel.getFeedBackById(id);
        res.status(200).json(feedBack);
        console.log('feedBack', feedBack)
    } catch (err) {
        res.status(500).send('sos gilipollas en feedBack Controller ');
        console.log('This is an error in create user by id', err);
    }
}


module.exports = {  getFeedBackById };
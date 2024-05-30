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


async function createFeedBack(req, res) {
    try {
        const {userId} = req.params;
        const { feedback } = req.body;
        const newFeedBack = await feedBackModel.createFeedBack(feedback, userId);
        res.status(201).json(newFeedBack);
    }
    catch (err) {
        res.status(500).send('Error creating FeedBack');
        console.log('Error creating FeedBack', err);
    }
}


module.exports = {  getFeedBackById, createFeedBack};
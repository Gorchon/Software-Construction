const descriptionModel = require("../models/descriptionModel");

async function getDescriptionById(req, res) {
    const { id } = req.params;

    try {
        const description = await descriptionModel.getDescriptionById(id);
        res.status(200).json(description);
        console.log('description', description)
    } catch (err) {
        res.status(500).send('sos gilipollas en description Controller ');
        console.log('This is an error in create user by id', err);
    }
}

async function createDescription(req, res) {
    try {
        const {userId} = req.params;
        const { description, prescription } = req.body;
        const newDescription = await descriptionModel.createDescription(description, prescription, userId);
        res.status(201).json(newDescription);
    }
    catch (err) {
        res.status(500).send('Error creating description');
        console.log('Error creating description', err);
    }
}


module.exports = {getDescriptionById, createDescription};
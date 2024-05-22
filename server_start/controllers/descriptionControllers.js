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


module.exports = { getDescriptionById };
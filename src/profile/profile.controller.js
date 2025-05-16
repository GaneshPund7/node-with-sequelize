const models = require('../../index')

async function getProfileDetails(req, res){
    const getUsers = await models.User.findAll();
    res.send(getUsers);

}
async function postProfileDetails(req, res){
    const { bio, address } = req.body;
    const addUser = await models.Profile.create({bio, address});

    res.json({message:" Profile added successfuly", data: addUser});

}

module.exports = {getProfileDetails, postProfileDetails}
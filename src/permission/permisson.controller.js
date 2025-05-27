const models = require('../../utils/db/index');

async function getPermssion(req, res){
   
    const getRoleId = await models.User.findOne({
       where: {UserId : 1},
       include:{ model: models.User}
    })
    res.json({message: "User found", data: getRoleId})
}
async function addPermission(req, res){
    const { RoleId, UserId } = req.body;

    try{ 
        await models.Permission.create({RoleId, UserId});
    res.status(200).json({message: "Permission added successfuly"})
    }catch(error){
        res.status(404).json({ error: error})
    }

}
module.exports = { getPermssion, addPermission }
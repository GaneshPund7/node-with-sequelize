const models = require('../../utils/db/index')

async function getRole(req, res) {
    try {
        const getRole =await models.Roles.findAll({
            where: {RoleId: 1}
        });
        res.status(200).json({ message: "Role fetched", Data: getRole })
    } catch (error) {
        res.send("Somthing went wrong..!");
    }
}

async function postRole(req, res) {
    const { roleName, description }= req.body;    
    try{
         const postRole =await models.Roles.create({roleName, description});
         res.status(200).json({ Message: "Role added" , Data: postRole})
    }catch(error){
        res.status(404).json({message:"Somthing went wrong..!", error: error} )
    }
}

module.exports = { getRole, postRole };
const models = require('../../utils/db/index');

async function checkpermission (req, res , next){
try{
const userId = req.userId;

if( !userId){
     return " Your unotherized"
}

const user = await models.User.findOne({
    where: {id: userId},
    include:{
        model : models.Roles, as: 'roles'
    }
})
if(user.roleId === 1){
    next()
}
res.send("You dont have permission to access this..!")
}catch(error){
    res.status(400).json({message: "somthing went wrong...", error: error})
}
}
module.exports = { checkpermission };
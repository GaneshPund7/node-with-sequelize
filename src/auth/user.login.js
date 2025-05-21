
const models = require('../../utils/db/index')
const { createtoken, verifyToken } = require('../../utils/middleware/checkPermission')
async function userLogin(req, res, next) {
    const { name, password } = req.body;

    try {
        const verifyUser = await models.User.findOne({
            //  attributes:['name']
            where: { name }
        })
        if (!verifyUser) {
            res.status(400).json({ message: "User not register" });
        }
        if (verifyUser.password !== password) {
            res.status(400).json({ message: "Password is wrong" });
        } 
        const token = await createtoken(name);
        console.log("Your token ", token)
        // const token = "g"
         return res.status(200).json({ message: "User Login successfuly" , token : token} );
    
    } catch (error) {
        res.status(400).json({ message: "Somthing went wrong" });
    }
}


module.exports = { userLogin }
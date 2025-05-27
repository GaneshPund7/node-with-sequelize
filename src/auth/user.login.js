
const models = require('../../utils/db/index');
const jwt = require('jsonwebtoken');
const { createToken } = require('../../utils/middleware/checkPermission');
async function userLogin(req, res, next) {
    const { name, password } = req.body;
    try {
        const verifyUser = await models.User.findOne({
            where: { name }
        })
        if (!verifyUser) {
            res.status(400).json({ message: "User not register" });
        }
        if (verifyUser.password !== password) {
            res.status(400).json({ message: "Password is wrong" });
        }        
        const id = verifyUser.id;
        const payload = { id, name, password }
       const token = await createToken(payload);
         return res.status(200).json({ message: "User Login successfuly", token: token} );
    
    } catch (error) {
        res.status(400).json({ message: "Somthing went wrong", error: error });
    }
}


module.exports = { userLogin };
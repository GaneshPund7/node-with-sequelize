const secretKey = "RamSharma"
const jwt = require('jsonwebtoken')
async function createtoken(payload){
    const token = jwt.sign(payload, secretKey, {expireIn: '500s'})
    console.log("Your jwt token ",token)
    return token 
}
async function verifyToken (req, res){
    const  token = req.heders.autherization.split(' ')[0]
 const verify = jwt.verify(token, secretKey )
 return verify
}
module.exports = { createtoken, verifyToken }
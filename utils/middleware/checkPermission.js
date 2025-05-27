const secretKey = "RamSharma"
const jwt = require('jsonwebtoken')

async function createToken(payload){
    const token = jwt.sign(payload, secretKey,{ expiresIn: '5000s'});
    return token
}

async function verifyToken (req, res){
    const  token = req.heders.autherization.split(' ')[1]
 const verify = jwt.verify(token, secretKey )
 return verify
}

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'].split(' ')[1];
  if (!token) return res.status(401).send("No token provided");

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(403).send("Failed to authenticate token");

    req.UserId = decoded.id;
    // console.log(decoded.password)

    next();
  });
}
module.exports = { createToken, verifyToken,authenticateToken }
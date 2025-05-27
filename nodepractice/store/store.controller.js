const models = require("../db");

async function getStore (req, res){
    const getStore = await models.Product.findAll({})
    res.status(200).json({message: "Data fetch", Data: getStore});
}

async function addStore (req, res){
    const { productName , description, price } = req.body;
    try{
        await models.Product.create({productName, description, price });
        res.status(200).send('Data uploaded successfully')
    }catch(error){
        res.status(400).send("somthing went wrong...")
    }

}

module.exports = { getStore, addStore }
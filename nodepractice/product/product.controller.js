 const models = require('../db/index')
//  const models = 'f'
async function getProduct (req, res){
    const getProducts = await models.Products.findAll({})
    res.status(200).json({message: "Data fetch", Data: getProducts});
}

async function addProduct (req, res){
    const { productName , description, price } = req.body;
    try{
        await models.Products.create({productName, description, price });
        res.status(200).send('Data uploaded successfully')
    }catch(error){
        res.status(400).send("somthing went wrong...")
    }

}

module.exports = {getProduct, addProduct}
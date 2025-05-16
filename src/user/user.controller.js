const models = require('../../index')
async function getUser(req, res){
    // const { id} = req.params;
    const getUsers = await models.User.findOne({
        where: {id : 1},
        include: { model: models.Profile, as: "profiles"},
        include: { model: models.Employee, as: "employees"}
    }); 

    res.send(getUsers); 
}
async function postUser(req, res){
    const { name, password, bio, address } = req.body;
    const addUser = await models.User.create({name, password});

    await models.Profile.create({ bio, address, userId: addUser.id });
    res.json({message:"User Added successfuly", data: addUser});
}

async function addEmployee(req, res){
    const { employeeName, employeeId, empRole } = req.body;
    const getId = await models.User.findOne({where:{ id :1}});
    // const addUser = await models.Employee.create({name, password});

    await models.Employee.create({ employeeName, employeeId, empRole , userId: getId.id  });
 
    res.json({message:"User Added successfuly",});
}




module.exports = {getUser, postUser,addEmployee}
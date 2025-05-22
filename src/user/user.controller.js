const { QueryTypes } = require('sequelize') 
const models = require('../../utils/db/index')
async function getUser(req, res) {
    // const { id} = req.params;
    try {
        const { id } = req.params
        // const getUsers = await models.User.findOne({
        //     where: { id: id },
        //     include: { model: models.Profile, as: "profiles" },
        //     // include: { model: models.Comment, as: "comments" }
        //     // include: { model: models.Employee, as: "employees"}
        // });

         const getUsers = await sequelize.query('Select * from `user`',{
 type:QueryTypes.SELECT
 })
         
        res.send(getUsers);
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}


async function getUserwithComment(req, res) {
    // const { id} = req.params;
    try {
        const { id } = req.params
        const getUsers = await models.User.findOne({
            where: { id: id },
            // include: { model: models.Profile, as: "profiles" },
            include: { model: models.Profile, as: "comments" }
            // include: { model: models.Employee, as: "employees"}
        });
         
        res.send(getUsers);
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}
async function postUser(req, res) {
    const { name, password, bio, address, roleName, cmtID } = req.body;
    const getRole = await models.Role.findOne({
        where: { roleName: roleName }
    });
    if (!getRole) {
        return res.status(404).json({ message: `Role ' ${roleName}' not found.` });
    }
    const roleId = getRole.id;
    console.log(roleId)
    const addUser = await models.User.create({ name, password, roleId });
    res.json({ message: "User Added successfuly",  data: addUser });

}

async function addEmployee(req, res) {
    const { employeeName, employeeId, empRole } = req.body;
    const getId = await models.User.findOne({ where: { id: 1 } });
    // const addUser = await models.Employee.create({name, password});

    await models.Employee.create({ employeeName, employeeId, empRole, userId: getId.id });

    res.json({ message: "User Added successfuly", });
}




module.exports = { getUser, postUser, addEmployee , getUserwithComment}
const models = require("../../utils/db");

// async function checkAuths(req, res, next) {

//   const id = req.UserId;
//   try {
//     if (!id) {
//       return res.status(401).send("Unauthorized");
//     }

//     const user = await models.User.findOne({
//       where: { id },
//       include: {
//         model: models.Permission,
//         as: 'permission'
//       }
//     });

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     const permission = await models.Permission.findOne({
//       where: { RoleId: user.RoleId }
//     });

//     if (permission) {
//       return next();
//     } else {
     
//       return res.status(403).send("You don't have permission for this service");
//     }

//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Something went wrong");
//   }
// }

// module.exports = {checkAuths};


// const models = require("../../utils/db");

async function checkAuths(req, res, next) {

  const id = req.UserId;
  try {
    if (!id) {
      return res.status(401).send("Unauthorized");
    }

    // Find the user
    const user = await models.User.findOne({
      where: { id },
      include: {
        model: models.Role,
        as: 'role'
      }
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Check if a permission exists for the user's role
    const permission = await models.Permission.findOne({
      where: { RoleId: user.RoleId }
    });

    if (permission) {
 
      return next();
    } else {
      // No permission for this role
      return res.status(403).send("You don't have permission for this service");
    }

  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong");
  }
}

module.exports = { checkAuths };

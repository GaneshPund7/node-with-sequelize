const models = require("../../utils/db");

async function checkAuths(req, res, next) {
  const id = req.userId;

  try {
    if (!id) {
      return res.status(401).send("Unauthorized");
    }

    const user = await models.User.findOne({
      where: { id },
      include: { model: models.Role, as: 'role' }
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const permission = await models.Permission.findOne({
      where: { RoleId: user.RoleId }
    });

    if (permission) {
      return next();
    } else {
     
      return res.status(403).send("You don't have permission to access this service");
    }

  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong");
  }
}

module.exports = checkAuths;

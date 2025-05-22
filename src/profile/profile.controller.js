const models = require('../../utils/db/index')

async function getProfileDetails(req, res){
    const getUsers = await models.User.findAll();
    res.send(getUsers);

}
async function postProfileDetails(req, res){
    const { bio, address } = req.body;

    //     const getCommentId = await models.Comment.findOne({
    //     where: { id : cmtID }
    // });
    //        const getUserId = await models.User.findOne({
    //     where: { id : userId }
    // });
  
const UserId = 1;
const CommentId = 1;
    // const commentId = getCommentId.id;
    await models.Profile.create({ bio, address, UserId, CommentId});
    res.json({ message: "User Added successfuly",  data: addUser });
 

}

module.exports = {getProfileDetails, postProfileDetails}
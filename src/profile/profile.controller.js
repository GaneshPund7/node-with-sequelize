const models = require('../../utils/db/index')



async function getProfileDetails(req, res){

    const from = parseInt(req.query.from) || 0;
const to = parseInt(req.query.to) || 10;

const limit = to - from + 1;
const offset = from;
    const getProfile = await models.Profile.findAll({
    limit,
    offset

    })
     const totalRecords = await models.Profile.count();

    const pageCount = Math.ceil( totalRecords / limit);

    res.status(200).json({ message: "profile details found", data: getProfile, counts: pageCount})
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
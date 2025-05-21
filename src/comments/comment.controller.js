const models = require('../../utils/db/index');
async function getComment(req, res){
    const getComment = models.Comment.findAll({

    })
    res.status(200).json(getComment);

}
async function postComment(req, res){
    const { comment  } = req.body
    const postComment = create({ comment, userId: 2 });
    res.status(200).json(postComment);
}

module.exports = { getComment, postComment };
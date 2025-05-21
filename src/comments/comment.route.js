const express = require('express');
const { getComment, postComment } = require('./comment.controller');
const comment = express.Router();

comment.get('/', getComment);
comment.post('/', postComment)

module.exports = comment;
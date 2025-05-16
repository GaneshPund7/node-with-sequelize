const express = require('express');
const { postProfileDetails, getProfileDetails } = require('./profile.controller')
const profile = express.Router();

profile.get('/', getProfileDetails);
profile.post('/', postProfileDetails);


module.exports = profile;

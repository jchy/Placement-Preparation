const express = require('express');
const router = express.Router();

const User = require('../models/users.model');
const validateUser = require('../utils/validateUser');
const {createUser} = require('../controllers/user.controller');


router.post("/", ...validateUser(), createUser);

module.exports = router;
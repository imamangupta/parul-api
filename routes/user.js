var express = require('express');
var router = express.Router();

const { addUser } = require('../controller/user/user');




router.post('/',  addUser);



module.exports = router;
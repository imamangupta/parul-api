var express = require('express');
var router = express.Router();

const user = require('./user')
router.use('/user', user);

 const consumer = require('./consumer')
 router.use('/consumer',consumer);




module.exports = router;
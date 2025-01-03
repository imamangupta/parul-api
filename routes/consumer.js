var express = require('express');
var router = express.Router();

const { addconsumer } = require('../controller/consumer');



router.post('/',  addconsumer);



module.exports = router;
/**
 * Created by Stephen on 2016/4/5.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource logout');
});

module.exports = router;


var express = require('express');
var router = express.Router();
//获取POST请求的数据
router.post('/', function (req, res, next) {
    console.log(req.body);
    res.send("aaaaaaaaaaaaaaa");
});
//获取GET请求的数据
router.get('/', function (req, res, next) {
    console.log(req.query);
    res.send("dddddddddddddddd");
});

module.exports = router;


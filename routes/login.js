var express = require('express');
var router = express.Router();

/*express获取参数有三种方法：官网实例：

Checks route params (req.params), ex: /user/:id
Checks query string params (req.query), ex: ?id=12
Checks urlencoded body params (req.body), ex: id=12
*/
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

router.get('/:userName', function (req, res, next) {
    console.log(req.params);
    console.log("param: userName = " + req.params.userName);
    res.send("bbbbbbbbbbbb");
});

module.exports = router;


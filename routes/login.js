var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){
    console.log(req.body);
    res.send("addddddddddddddd");
});

module.exports = router;


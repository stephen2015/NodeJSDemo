var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/doLogin', function (req, res, next) {
    console.log(req);
});

module.exports = router;

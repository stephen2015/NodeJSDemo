/**
 * Created by Stephen on 2016/4/5.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource login');
});

exports.doLogin = function(req, res){
    var user={
        username:'admin',
        password:'admin'
    }
    if(req.body.username===user.username && req.body.password===user.password){
        req.session.user=user;
        return res.redirect('/');
    } else {
        return res.redirect('/login');
    }
};
module.exports = router;


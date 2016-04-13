var express = require('express');
var router = express.Router();
var City = require('../models/citySQL.js');

/* GET city info. */
router.get('/', function (req, res, next) {
    console.log(req.query);
    City.getCityInfo(req.query.id, function (err, results) {
        console.log(results[0].Name);
        res.send(results);
    });

    // City.countCity(function (err, results) {
    //     console.log(results[0]);
    //     res.send(results[0]);
    // });
});

module.exports = router;

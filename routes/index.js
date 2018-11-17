var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'LASU-ENT'
    });
});

router.get('/test', function (req, res, next) {
    res.render('test', {
        title: 'LASU-ENT'
    });
});



module.exports = router;

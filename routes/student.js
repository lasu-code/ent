var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('student/index', {
        title: 'login'
    });
});

router.get('/login', function (req, res, next) {
    res.render('student/login', {
        title: 'login'
    });
});

router.get('/signup', function (req, res, next) {
    res.render('student/signup', {
        title: 'signup'
    });
});

module.exports = router;

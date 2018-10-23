var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('student/index', {
        title: 'REGISTRATION'
    });
});

router.get('/login', function (req, res, next) {
    res.render('student/login', {
        title: 'LASU-ENT'
    });
});

router.get('/signup', function (req, res, next) {
    res.render('student/signup', {
        title: 'LASU ENT'
    });
});

router.get('/form', function (req, res, next) {
    res.render('student/form', {
        title: 'LASU-ENT'
    });
});

module.exports = router;

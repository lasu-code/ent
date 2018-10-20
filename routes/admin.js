var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
    res.render('admin/login', {
        title: 'Admin Login'
    });
});

router.get('/signup', function (req, res, next) {
    res.render('admin/signup', {
        title: 'Admin Signup',
        active: "active"
    });
});

router.get('/dashboard', function (req, res, next) {
    res.render('admin/dashboard', {
        title: 'Admin Dashboard'
    });
});

router.get('/categories', function (req, res, next) {
    res.render('admin/categories', {
        title: 'Admin Dashboard'
    });
});

module.exports = router;

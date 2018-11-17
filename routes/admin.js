var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/', {
        title: 'Admin Login'
    });
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

router.get('/addvocation', function (req, res, next) {
    res.render('admin/addvocation', {
        title: 'Admin Dashboard'
    });
});

router.get('/combinedlist', function (req, res, next) {
    res.render('admin/combinedlist', {
        title: 'Admin Dashboard'
    });
});

router.get('/singlecategory', function (req, res, next) {
    res.render('admin/singlecategory', {
        title: 'Admin Dashboard'
    });
});

router.get('/modifyvocations', function (req, res, next) {
    res.render('admin/modifyvocations', {
        title: 'Admin Login'
    });
});

module.exports = router;

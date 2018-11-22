let express = require('express');
let router = express.Router();
let Admin = require('../models/admin');
const passport = require('passport');

function checkLoginStatus (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'Login to continue!')
    res.redirect('/admin/login');
}

router.get('/', function (req, res, next) {
    res.render('admin/', {
        title: 'Admin Login'
    });
});

router.get('/login', function (req, res, next) {
    res.render('admin/login', {
        title: 'Admin Login', loginError: ''
    });
});

router.post('/login', passport.authenticate('loginAdmin', {
    successRedirect: '/admin/dashboard',
    failureRedirect: '/admin/login',
    failureFlash: true
}));

router.get('/signup', function (req, res, next) {
    res.render('admin/signup', {
        title: 'Admin Signup',
        active: "active"
    });
});

router.post('/signup', passport.authenticate('registerAdmin', {
    successRedirect: '/admin/dashboard',
    failureRedirect: '/admin/login',
    failureFlash: true
}))

router.get('/dashboard', checkLoginStatus, function (req, res, next) {
    res.render('admin/index', {
        title: 'Admin Dashboard',
        isLogin: req.isAuthenticated()
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

router.get('/addvocation', function (req, res, next) {
    res.render('admin/addvocation', {})
});

router.get('/modifyvocations', function (req, res, next) {
    res.render('admin/modifyvocations', {
        title: 'Admin Login'
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();
let Lasu = require('../models/adminSignup');

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

router.post('/login', function (req, res, next) {
    res.redirect('/admin/categories');
});

router.get('/signup', function (req, res, next) {
    res.render('admin/signup', {
        title: 'Admin Signup',
        active: "active"
    });
});

router.post('/signup', function (req, res, next) {
    // res.render('admin/dashboard');
    console.log(req.body);

    let Admins = {
      usernames: req.body.surname,
      staffIds: req.body.staffId,
      PhoneNumbers: req.body.phone,
      StaffEmails: req.body.email,
      
    }
    let data = new Lasu(Admins);

    data.save();

    res.redirect('/admin/categories');
});

router.get('/dashboard', function (req, res, next) {
    res.render('admin/Dashboard', {
        title: 'Admin Dashboard'
    });
});

router.get('/categories', function (req, res, next) {
    res.render('admin/categories', {
        title: 'Admin Dashboard'
    });
});

module.exports = router;

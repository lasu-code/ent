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

<<<<<<< HEAD
router.get('/addvocation', function (req, res, next) {
    res.render('admin/addvocation', {
=======
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
>>>>>>> 47eebd28dfec92f7b9c2270dd468a390f865f3d2
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

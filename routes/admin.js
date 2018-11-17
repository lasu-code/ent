let express = require('express');
let router = express.Router();
let Lasu = require('../models/adminSignup');

const passport = require('../middleware/admin-auth');

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

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: 'Invalid username or password!'}),
    function (req, res, next) {
        res.redirect('/admin/categories');
    }
);

// router.get('/signup', function (req, res, next) {
//     res.render('admin/signup', {
//         title: 'Admin Signup',
//         active: "active"
//     });
// });

router.post('/signup', function (req, res, next) {
    let Admins = {
        username: req.body.username,
        staffId: req.body.staffId,
        phoneNumber: req.body.phone,
        staffEmail: req.body.email,
        password: req.body.password,
        is_super: true
    }
    let data = new Lasu(Admins);

    data.save();

    res.redirect('/admin/dashboard');
});

router.get('/dashboard', function (req, res, next) {
    res.render('admin/index', {
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

router.get('/addvocation', function (req, res, next) {
    res.render('admin/addvocation', {})
});

router.get('/modifyvocations', function (req, res, next) {
    res.render('admin/modifyvocations', {
        title: 'Admin Login'
    });
});

module.exports = router;

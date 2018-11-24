let express = require('express');
let router = express.Router();
let Admin = require('../models/admin');
const passport = require('passport');
let studentVocation = require('../models/studentVocation');

function checkLoginStatus (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'Login to continue!')
    res.redirect('/admin/login');
}

router.get('/', function (req, res, next) {
    res.render('admin/index', {
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
    studentVocation.find({}).exec().then((sv) => {
        res.render('admin/index', {
            title: 'Admin Dashboard',
            isLogin: req.isAuthenticated(),
            vocations: sv
        });
    }).catch((err) => {
        console.log(err)
    })
  
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
    res.render('admin/addvocation', {title: "addVocation"})
});


router.post('/addvocation', function (req, res, next) {
    console.log(req.body);

    let slots = {   
      numberOfslots: req.body.numberOfSlot,    
      vocations: req.body.title,    
      isActive: (req.body.isActive == 1) ? 'true' : 'false',  
    }

    let data = new studentVocation(slots);
    data.save();
    res.redirect('/admin/dashboard');
});


router.get('/modifyvocations', function (req, res, next) {
    res.render('admin/modifyvocations', {
        title: 'Admin Login'
    });
});

module.exports = router;

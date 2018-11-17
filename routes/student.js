var express = require('express');
var router = express.Router();
let studentSchema = require('../models/studentSignup');
let studentVocation = require('../models/studentVocation');

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.render('student/login', {
        title: 'LASU-ENT'
    }); 
    
});

router.post('/login', function(req, res, next){
    
    res.redirect('/student/profile');
});


// .............................................................

router.get('/signup', function (req, res, next) {
    res.render('student/signup', {
        title: 'LASU ENT'
    });

});
router.post('/signup', function (req, res, next) {
    console.log(req.body);

    let Student = {
      surnames: req.body.surname,
      middlenames: req.body.middle,
      others: req.body.other,
      facultys: req.body.faculty,
      depts: req.body.dept,
      matrics: req.body.matric,
      PhoneNumbers: req.body.number,
      Emails: req.body.email,
      
    }
    let data = new studentSchema(Student);
    data.save();
    res.redirect('/student/profile');
});

// router.get('/profile', function(req, res, next){
    
  
// })


// .........................................................................
router.get('/profile', function (req, res, next) {
    let id = "5bdb200de97c6f117d05d872";
    studentSchema.findById(id, function(err,getnames){
        res.render('student/index', {titled: getnames, title: 'LASU ENT'});
    //     // res.send(getnames);
    });
});

router.post('/profile', function (req, res, next) {
    console.log(req.body);

    let Student = {
      vocations: req.body.vocation,
      matrics: req.body.matric,
    }
    let data = new studentVocation(Student);

    data.save();

    res.redirect('/student/profile');
});

module.exports = router;

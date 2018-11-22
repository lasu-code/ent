const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/admin');

passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {
    Admin.findById(id, function (err, user) {
        done(err, user);
    })
})

passport.use('registerAdmin',
    new LocalStrategy({
        usernameField: "staffId",
        passwordField: "password",
        passReqToCallback: true
    },
    function (req, username, password, done) {
        Admin.findOne({ 'staffId': username })
            .catch((err) => {
                req.flash('error', 'Error occured, try again!');
                return done(err);
            })
            .then((user) => {
                if (user) {
                    req.flash('error', 'User account exists, login instead');
                    return done(null, false);
                }

                let AdminUser = new Admin();
                AdminUser.name = req.body.username;
                AdminUser.staffId = req.body.staffId;
                AdminUser.phoneNumber = req.body.phone;
                AdminUser.staffEmail = req.body.email;
                AdminUser.password = AdminUser.generateHash(req.body.password);
                AdminUser.is_super = true;

                AdminUser.save()
                    .catch((err) => {
                        return done(err)
                    })
                    .then(() => {
                        return done(null, AdminUser)
                    })
            })
    }
));

passport.use('loginAdmin',
    new LocalStrategy({
        usernameField: "staffId",
        passwordField: "password",
        passReqToCallback: true
    },
    function (req, username, password, done) {
        Admin.findOne({ 'staffId': username})
            .catch((err) => {
                return done(err);
            })
            .then((user) => {
                if (!user) {
                    req.flash('error', "Invalid User!")
                    return done(null, false)
                }
                if (!user.validatePassword(password)) {
                    req.flash('error', "Invalid password provided, try again!")
                    return done(null, false)
                }
                return done(null, user);
            })
    })
);

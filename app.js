const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const passport = require('passport');
const mongoose = require('mongoose');

const adminRouter = require('./routes/admin');
const studentRouter = require('./routes/student');
const indexRouter = require('./routes/index');

// inject passport config
require('./middleware/auth.js')

// mongoose init
const dbName = 'ent_db';
const connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString, { useNewUrlParser: true, useFindAndModify: false });

// run express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1) // trust first proxy

// http request logger
app.use(logger('dev'));

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// express cookie parser
app.use(cookieParser('lasucode_ent'));

// flash message config - flash depends on session
app.use(session({
    name: 'ent_sessions',
    secret: 'lasucode_ent',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        uri: connectionString,
        databaseName: dbName,
        collection: 'ent_sessions'
    })
}));
app.use(flash());

// passport init
app.use(passport.initialize());
app.use(passport.session());

// express static url path
app.use(express.static(path.join(__dirname, 'public')));

// mount routes on instance of express
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
app.use('/', indexRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

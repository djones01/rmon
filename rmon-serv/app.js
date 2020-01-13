var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Connect to mongodb database
mongoose.connect("mongodb://localhost:27017/rmondb").then(
          () => {console.log('Database connection is successful') },
          err => { console.log('Error when connecting to the database'+ err)}
);

// Import all defined routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var envConnectionRouter = require('./routes/env-connection.routes');
var hcmCloudConnectionRouter = require('./routes/hcm-cloud-connection.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use all defined routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/envConnection',envConnectionRouter);
app.use('/envConnection/hcmCloud',hcmCloudConnectionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

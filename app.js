import createError from 'http-errors';
import express, { json, urlencoded, static } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { Promise, connect } from 'mongoose';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

var app = express();
var port = process.env.PORT || 3000
let User = require('./models/usersModel');
Promise = global.Promise;
connect('mongodb+srv://dbUser:dbPassword@cluster0-n46qh.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }).catch(function (reason) {
  console.log('Unable to connect to the mongodb instance. Error: ', reason);
});

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

export default app;

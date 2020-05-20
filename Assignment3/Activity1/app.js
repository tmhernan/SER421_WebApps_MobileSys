/*
A web app that displays an article and allows a user to add
comments or delete comments. You can view user activity and
delete a specific comment. 

*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//ROUTES
//These modules/files contain code for handling
//particular sets of related "routes" (URL paths)
var indexRouter = require('./routes/index');
var addcommentRouter = require('./routes/add');
var deletecommentRouter = require('./routes/delete');
var userActivityRouter = require('./routes/activity');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Add the middleware libraries into the request
//handling chain.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
Now that all the other middleware is set up, we add our 
(previously imported) route-handling code to the request 
handling chain. The imported code will define particular 
routes for the different parts of the site:
*/
app.use(indexRouter);
app.use(addcommentRouter);
app.use(deletecommentRouter);
app.use(userActivityRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

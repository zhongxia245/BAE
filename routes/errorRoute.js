/**
 * Created by zhongxia on 2015/12/26.
 * 路由处理之后，还能到这边来的话，那么正常就是错误的处理
 * 这里主要放一些错误的处理
 */
var express = require('express');
var app = express.Router();
module.exports = app;

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('login/', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err)
    res.render('error', {
        message: err.message,
        error: {}
    });
});
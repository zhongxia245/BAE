var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
//自定义的类库以及配置信息
var config = require('./config');
var mongoosekeeper = require('./lib/mongoosekeeper');
//路由
var routes = require('./routes/index');
var users = require('./routes/users');
//RESTAPI
var navRoute = require('./restapi/nav');
var adminRoute = require('./routes/admin/navApi');
var categoryRoute = require('./routes/admin/categoryApi');

var app = express();

if (config.cross_domain) {
    //设置跨域访问
    app.all('/rest/*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });
}

// view engine setup
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//判断是BAE环境，还是开发环境
if (config.type === 'bae') {
   // var log = require('./lib/log');
    //log.debug("bae");
    console.log(new Date() + ' : start BAE!');
    mongoosekeeper.config(config.baeDb);
    //开发环境，则使用日志
} else if (config.type === 'dev') {
    console.log(new Date() + ':localhost');
    mongoosekeeper.config(config.localDb);
}

app.use('/', routes);
app.use('/admin', adminRoute); app.use('/admin', categoryRoute);
app.use('/rest', navRoute);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function (err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

// production error handler
// no stacktraces leaked to user
//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    console.log(err)
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});


module.exports = app;

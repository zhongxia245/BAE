var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var wechat = require('wechat');

//自定义的类库以及配置信息
var middlewareRoute = require('./routes/preRoute');
var route = require('./routes/route');
var errorRoute = require('./routes/errorRoute');
var config = require('./config')

var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('less-middleware')(path.join(__dirname, 'public')));

app.use(middlewareRoute);

//设置静态文件的入口
app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//自定义路由处理
app.use(route);
app.use(errorRoute);




module.exports = app;
/**
 * Created by zhongxia on 2015/12/26.
 */
console.log('Route')
var express = require('express');
var app = express.Router();
module.exports = app;

//0. 加载模块
var routes = require('./index');
var login = require('./login');
//RESTAPI
var navRoute = require('./../restapi/nav');
var adminRoute = require('./admin/navApi');
var categoryRoute = require('./admin/categoryApi');
var userRoute = require('./admin/userApi');

//2. 路由处理
app.use('/', routes);
app.use('/', login);
app.use('/admin', adminRoute);
app.use('/admin', categoryRoute);
app.use('/admin', userRoute);
app.use('/rest', navRoute);

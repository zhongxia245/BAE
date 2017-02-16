/**
 * Created by zhongxia on 2015/12/26.
 */
var express = require('express');
var config = require('../config');

var router = express.Router();

//0. 加载模块
var routes = require('./index');
var login = require('./login');

//RESTAPI
var navRoute = require('./../restapi/nav');
var adminRoute = require('./admin/navApi');
var categoryRoute = require('./admin/categoryApi');
var userRoute = require('./admin/userApi');

var wechatRoute = require('./wechat/index')

//2. 路由处理
router.use('/', routes);
router.use('/', login);
router.use('/', wechatRoute);
router.use('/admin', adminRoute);
router.use('/admin', categoryRoute);
router.use('/admin', userRoute);
router.use('/rest', navRoute);



module.exports = router;
/**
 * Created by zhongxia on 2015/12/23.
 * 这里实现的接口都是实现跨域的功能
 */
'use strict';
/**
 * 对外开放的RESTAPI
 */
var express = require('express');
var mongoosekeeper = require('../lib/mongoosekeeper');
var navModel = require('../models/admin/models/nav');
var categoryModel = require('../models/admin/models/category');
var router = express.Router();

/**
 * 获取常用工具集的导航地址数据]
 */
router.get('/getNav.do', function (req, res) {
    var criteria = req.query;
    var condition = {};
    for (var key in criteria) {
        if (criteria.hasOwnProperty(key) && key != "page" && key != "pagesize" && key != "changepage") {
            condition[key] = criteria[key];
        }
    }
    mongoosekeeper.use(function (proxy) {
        navModel.find(condition, proxy);
    }, function (err, data) {
        if (err) {
            return console.log('getNav error:', err);
        }
        res.send(data);
    });
});

/**
 * 获取分类,目前多表关联不是很清楚，所以用这个返回，前端处理
 */
router.get('/getCategory.do', function (req, res) {
    mongoosekeeper.use(function (proxy) {
        categoryModel.find({}, proxy);
    }, function (err, data) {
        if (err) {
            return console.log('getCategory error:', err);
        }
        res.send(data);
    });
});

/**
 * 测试跨域是否可以用
 * */
router.post('/post.do', function (req, res) {
    var param = req.body;
    res.send(param);
});

module.exports = router;

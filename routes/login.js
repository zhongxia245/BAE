/**
 * Created by zhongxia on 2015/12/26.
 */
var express = require('express');
var router = express.Router();
var encrypy = require('../lib/encrypt');
var mongoosekeeper = require('../lib/mongoosekeeper');
var Model = require('../models/admin/models/user');
module.exports = router;

router.post('/login.do', function (req, res, next) {
    var condition = {
        "username": req.body["username"],
        "password": encrypy(req.body["password"]),
        "enable": true
    };
    mongoosekeeper.use(function (proxy) {
        Model.find(condition, proxy);
    }, function (err, data) {
        var result = {
            reqUrl: req.originalUrl,
            code: 1,
            message: '登录成功!'
        };
        if (err) {
            return console.log(err);
        }
        if (data.length != 0) {
            result['toUrl'] = '../admin/';
            res.cookie('ZXID', encrypy('zhongxia_' + new Date().getTime()), {maxAge: 2 * 60 * 60 * 1000});
        } else {
            result['code'] = 0;
            result['message'] = '您输入的账号或密码有误!'
        }
        res.send(result);
    });
});

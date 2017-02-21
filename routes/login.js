/**
 * Created by zhongxia on 2015/12/26.
 */
var express = require('express')
var router = express.Router()
var encrypy = require('../lib/encrypt')
var mongoosekeeper = require('../lib/mongoosekeeper')
var Model = require('../models/admin/models/user')
module.exports = router

//注销
router.all('/logout', function (req, res) {
    req.session.user = null
    res.redirect(301, '/login/index.html')
})

router.post('/login.do', function (req, res, next) {
    var condition = {
        "username": req.body["username"],
        "password": encrypy(req.body["password"]),
        "enable": true
    }

    mongoosekeeper.use(function (proxy) {
        Model.find(condition, proxy)
    }, function (err, data) {
        console.log(data)
        var result = {
            reqUrl: req.originalUrl,
            code: 1,
            message: '登录成功!'
        }
        if (err) {
            return console.log(err)
        }
        if (data.length != 0) {
            req.session.user = req.body['username']
            result['toUrl'] = '/admin/index.html'
        } else {
            req.session.user = ''
            result['code'] = 0
            result['message'] = '您输入的账号或密码有误!'
        }
        res.send(result)
    })
})

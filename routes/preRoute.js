/**
 * Created by zhongxia on 2015/12/26.
 * 主要处理一些路由处理之前的一些操作，比如登录验证，设置cookie，session，中间件的
 */
var express = require('express')
var path = require('path')
var session = require('express-session')
var cookieParser = require('cookie-parser')
var router = express.Router()
// 自定义模块
var mongoosekeeper = require('./../lib/mongoosekeeper')
var config = require('./../config')


if (config.cross_domain) {
    //设置跨域访问
    router.all('/rest/*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "X-Requested-With")
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/jsoncharset=utf-8")
        next()
    })
}

// 设置cookie
// router.use(cookieParser({ name: 'zhongxia' }))

// 设置 Session
router.use(session({
    secret: 'zhongxia',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 10 //过期时间设置(单位毫秒)
    }
}))

router.all('/admin/*', function (req, res, next) {
    if (!req.session.user) {
        res.redirect('/login/index.html')
    } else {
        next()
    }
})


//判断是BAE环境，还是开发环境
if (process.env.NODE_ENV === 'development') {
    console.log(new Date() + ' : use localhost mongodb...')
    mongoosekeeper.config(config.localDb)
    //开发环境，则使用日志
} else {
    console.log(new Date() + ' : use bae  mongodb...')
    mongoosekeeper.config(config.baeDb)
}

module.exports = router
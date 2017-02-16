'use strict'
var express = require('express')//我们用的是koa框架，所以先要把koa给导进来
var path = require('path')//我们用文件来存储access_token所以需要把path模块导入进来
var wechat = require('./wechat')//这个是微信获取access_token的代码逻辑
var util = require('./util')//这个辅助代码的实现
var config = require('../config.js')

//在这里我们需要新建一个文件夹config，里面新建一个wechat.txt
var wechat_file = path.join(__dirname, './config/wechat.txt')

//这个是配置文件
var config = {
  wechat: {
    appID: config.wechat.appID,
    appSecret: config.wechat.appSecret,
    token: config.wechat.token,
    getAccessToken: function () {
      //通过这个来实现获取access_token
      return util.readFileAsync(wechat_file)
    },
    saveAccessToken: function (data) {
      data = JSON.stringify(data)
      //通过这个来保存access_token
      return util.writeFileAsync(wechat_file, data)
    }
  }
}

module.exports = config


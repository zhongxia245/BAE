module.exports = {
  type: 'bae', //bae  or  dev
  //线上数据库账号密码
  baeDb: {
    "host": "mongo.duapp.com",
    "database": "fZelkgarNLTjLCCFIbdX",
    "userid": "4a2a3087b2bc47a4b7f09e43c41073f3",
    "password": "9ea7aee739134ba5a9a1819c0f2d1c86",
    "port": 8908
  },
  //本地数据库账号密码
  localDb: {
    "host": "localhost",
    "database": "bae",
    "userid": "",
    "password": "",
    "port": 27017
  },
  // 日志文件
  log: {
    'user': '4a2a3087b2bc47a4b7f09e43c41073f3',
    'passwd': '836dd0e7456e474f8054e6e11c435786'
  },
  wechat: {
    appid: 'wx9455c903881f5334',
    appSecret: 'ac41051513de4ed8721318c4189b943f',
    token: 'zhongxia',
    encodingAESKey: 'H9WaLug7Ygh2ALL9hfbPOAgoL5cjvDvnLwgxaVzqbuW'
  },
  cross_domain: true //是否跨域
};

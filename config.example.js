module.exports = {
  type: 'dev', //bae  or  dev
  baeDb: { //线上数据库账号密码
    "host": "mongo.duapp.com",
    "database": "fZelkgarNLTjLCCFIbdX",
    "userid": "",
    "password": "",
    "port": 8908
  },
  localDb: { //本地数据库账号密码
    "host": "localhost",
    "database": "bae",
    "userid": "",
    "password": "",
    "port": 27017
  },
  log: {
    'user': '',
    'passwd': ''
  },
  cross_domain: true //是否跨域
};

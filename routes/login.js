/**
 * Created by zhongxia on 2015/12/26.
 */
var express = require('express');
var router = express.Router();
module.exports = router;

router.post('/login.do', function (req, res, next) {
    var result = {
        reqUrl: req.originalUrl,
        code: 1,
        message: '登录成功!'
    };
    var user = req.body;
    if (user['username'] != 'zhongxia' || user['password'] != 'zhongxia') {
        result['code'] = 0;
        result['message'] = '您输入的账号或密码有误!'
    } else {
        //req.cookie.userId = '12312312312321123';
        result['toUrl'] = '../admin/'
    }
    res.send(result);
});

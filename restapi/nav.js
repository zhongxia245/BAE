/**
 * Created by zhongxia on 2015/12/23.
 */
'use strict';
/**
 * 对外开放的RESTAPI
 */
var express = require('express'),
    mongoosekeeper = require('../lib/mongoosekeeper'),
    Model = require('../models/admin/models/nav_bae'),
    router = express.Router();

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
        Model.find(condition, proxy);
    }, function (err, data) {
        if (err) {
            console.log('getNav error:', err);
        }
        res.send(data);
    });
});

router.post('/post.do', function (req, res) {
    var param = req.body;
    res.send(param);
});
module.exports = router;

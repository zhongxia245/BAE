/**
 * Created by zhongxia on 2015/12/26.
 */
'use strict';
/**
 * 后台管理的接口
 */
var express = require('express');
var mongoose = require('mongoose');
var encrypy = require('../../lib/encrypt');
var mongoosekeeper = require('../../lib/mongoosekeeper');
var Model = require('../../models/admin/models/user');
var router = express.Router();
var ObjectId = mongoose.Types.ObjectId;

/**
 * 获取用户数据
 */
router.get('/getUser.do', function (req, res) {
    //get param
    var criteria = req.query;
    var page = req.query.page || 1;
    var pagesize = req.query.pagesize || 20;
    var condition = {};
    for (var key in criteria) {
        if (criteria.hasOwnProperty(key) && key != "page" && key != "pagesize" && key != "changepage") {
            if (criteria[key].length != 0) {
                condition[key] = criteria[key];
            }
        }
    }
    //query data
    mongoosekeeper.use(function (proxy) {
        Model.execPageQuery(page, pagesize, condition, proxy);
    }, function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    });
});

/**
 * 添加用户
 */
router.post('/addUser.do', function (req, res, next) {
    var doc = req.body;
    doc['password'] = encrypy(doc['password']);
    mongoosekeeper.use(function (proxy) {
        Model.create(doc, proxy);
    }, function (err) {
        if (err) {
            return console.log(err);
        } else {
            res.send(true);
        }
    });
});

/**
 * 修改
 */
router.post('/updateUser.do', function (req, res, next) {
    var doc = req.body;
    var update = {};
    for (var key in doc) {
        if (doc.hasOwnProperty(key) && key != "_id") {
            update[key] = doc[key];
        }
    }

    var id = doc._id;
    var conditions = {
        _id: ObjectId(id)
    };
    var update = {
        $set: update
    };
    var options = {
        upsert: true
    };

    mongoosekeeper.use(function (proxy) {
        Model.update(conditions, update, options, proxy);
    }, function (err) {
        if (err) {
            return console.log(err);
        }
        res.send(true);
    });
});

/**
 * 删除,支持批量删除
 */
router.get('/deleteUser.do', function (req, res, next) {
    var ids = req.query.id.split(',');

    mongoosekeeper.use(function (proxy) {
        Model.remove({_id: {$in: ids}}, proxy);
    }, function (err) {
        if (err) {
            return console.log(err);

        } else {
            res.send(true);
        }
    });
});

/*******初始化之前的旧数据 Start****************/
router.get('/addUserData.do', function (req, res, next) {
    var datas = [{
        "username": "zhongxia",
        "password": "zhongxia",
        "email": "294798491@qq.com"
    }];
    for (var i = 0, length = datas.length; i < length; i++) {
        var doc = datas[i];
        mongoosekeeper.use(function (proxy) {
            Model.create(doc, proxy);
        }, function (err) {
            if (err) {
                return console.log(err);
            } else {
                res.send(true);
            }
        });
    }
});
/*******初始化之前的旧数据 End****************/

module.exports = router;

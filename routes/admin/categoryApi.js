'use strict';
/**
 * 后台管理的接口
 */
var express = require('express');
var mongoose = require('mongoose');
var mongoosekeeper = require('../../lib/mongoosekeeper');
var Model = require('../../models/admin/models/category');
var router = express.Router();
var ObjectId = mongoose.Types.ObjectId;

/**
 * 获取常用工具集的导航地址数据][前端表格控件，指定URL，居然用Post，吐了]
 */
router.get('/getCategory.do', function (req, res) {
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
 * 添加导航数据
 */
router.post('/addCategory.do', function (req, res, next) {
    var doc = req.body;

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
router.post('/updateCategory.do', function (req, res, next) {
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
router.get('/deleteCategory.do', function (req, res, next) {
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
router.get('/addData.do', function (req, res, next) {
    var datas = [{
        "name": "常用工具集",
        "value": "tool",
        "remark": "常用的前端在线工具"
    }, {
        "name": "博客列表",
        "value": "bkll",
        "remark": "优秀博客"
    }, {
        "name": "框架集",
        "value": "kjj",
        "remark": "前端框架或者类库推荐"
    }, {
        "name": "优秀文章",
        "value": "article",
        "remark": "各类前端优秀文章"
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

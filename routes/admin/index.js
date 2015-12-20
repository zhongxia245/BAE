'use strict';
/**
 * 后台管理的接口
 */
var express = require('express'),
    mongoose = require('mongoose'),
    Model = require('../../models/admin/models/nav'),
    router = express.Router(),
    basePath = "/admin", //基路径
    ObjectId = mongoose.Schema.Types.ObjectId;

/**
 * 获取常用工具集的导航地址数据][前端表格控件，指定URL，居然用Post，吐了]
 */
router.get(basePath + '/getNav.do', function (req, res, next) {
    var criteria = req.query;
    var page = req.query.page;
    var pagesize = req.query.pagesize;
    var condition = {};
    for (var key in criteria) {
        if (criteria.hasOwnProperty(key) && key != "page" && key != "pagesize" && key != "changepage") {
            condition[key] = criteria[key];
        }
    }
    Model.execPageQuery(page, pagesize,condition,function (err, data) {
        if (err) {
            console.log(err);
            return;
        } else {
            var returnData = {
                Rows: data.rows,
                Total: data.total
            };
            res.send(returnData);
        }
    })
});

/**
 * 添加导航数据
 */
router.post(basePath + '/addNav.do', function (req, res, next) {
    var doc = req.body;
    Model.create(doc, function (error) {
        if (error) {
            console.log(error);
            return;
        } else {
            res.send(doc);
        }
    });
});

/**
 * 修改
 */
router.post(basePath + '/updateNav.do', function (req, res, next) {
    var doc = req.body;
    var conditions = {
        _id: doc._id
    };
    var update = {
        $set: doc
    };
    var options = {
        upsert: true
    };
    Model.update(conditions, update, options, function (error) {
        if (error) {
            console.log(error);
            return;
        } else {
            res.send(true);
        }
    });
});

/**
 * 删除
 */
router.get(basePath + '/deleteNav.do', function (req, res, next) {
    Model.remove({_id: req.query.id}, function (error) {
        if (error) {
            console.log(error);
            return;
        } else {
            res.send(true);
        }
    });
});


/*******初始化之前的旧数据 Start****************/
router.get(basePath + '/addTool.do', function (req, res, next) {
    var datas = [{
        "url": "http://tool.lu/js/",
        "name": "JS美化",
        "img": "img/js.png"
    }, {
        "url": "http://tool.lanrentuku.com/cssformat/",
        "name": "CSS美化",
        "img": "img/css.png"
    }, {
        "url": "http://www.bejson.com/",
        "name": "JSON格式化",
        "img": "img/json.png"
    }, {
        "url": "http://tool.oschina.net/highlight",
        "name": "代码高亮",
        "img": "img/highlight.png"
    }, {
        "url": "http://cdn.code.baidu.com/",
        "name": "百度静态资源公共库",
        "img": "img/cdn.png"
    }, {
        "url": "http://www.iconfont.cn/",
        "name": "阿里云矢量图",
        "img": "img/icon.png"
    }, {
        "url": "http://www.css88.com/tool/css3Preview/",
        "name": "CSS3样式生成器",
        "img": "img/css3.png"
    }];
    for (var i = 0, length = datas.length; i < length; i++) {
        var doc = datas[i];
        doc.category = 'tool';
        Model.create(doc, function (error) {
            if (error) {
                console.log(error);
                return;
            } else {
                console.log('save ok');
                res.send('save ok');
            }
        });
    }
});

router.get(basePath + '/addBKLL.do', function (req, res, next) {
    var datas = [{
        "url": "http://jikey.cnblogs.com/",
        "name": "博客园~豪情",
        "title": "前端各种入门知识，已经JS讨论群组织者，群的氛围很好，每月有分享知识",
        "count": 8
    }, {
        "url": "http://ued.taobao.org/blog/",
        "name": "淘宝网UED",
        "title": "淘宝前端的博客",
        "count": 8
    }, {
        "url": "http://www.cnblogs.com/TomXu/",
        "name": "博客园~汤姆大叔",
        "title": ".NET,以及JavaScript",
        "count": 6
    }, {
        "url": "http://www.cnblogs.com/bigbearbb/",
        "name": "博客园~大熊君",
        "title": "NodeJS,HTML5各种系列的教程文章，也是一个前端群的组织者",
        "count": 6
    }, {
        "url": "http://www.cnblogs.com/yexiaochai/",
        "name": "博客园~叶小钗",
        "title": "nodejs、单页应用框架、设计思想培养",
        "count": 6
    }];
    for (var i = 0, length = datas.length; i < length; i++) {
        var doc = datas[i];
        doc.category = 'bkll';
        Model.create(doc, function (error) {
            if (error) {
                console.log(error);
                return;
            } else {
                console.log('save ok');
                res.send('save ok');
            }
        });
    }
});

router.get(basePath + '/addKKJ.do', function (req, res, next) {
    var datas = [{
        "url": "http://www.kancloud.cn/jikeytang/qq/87646",
        "name": "高级JS开发群资源",
        "img": "img/kancloud.png"
    }, {
        "url": "http://ant.design/docs/introduce",
        "name": "Ant-Design React组件库",
        "img": "img/ant.png"
    }];
    for (var i = 0, length = datas.length; i < length; i++) {
        var doc = datas[i];
        doc.category = 'kkj';
        Model.create(doc, function (error) {
            if (error) {
                console.log(error);
                return;
            } else {
                console.log('save ok');
                res.send('save ok');
            }
        });
    }
});
/*******初始化之前的旧数据 End****************/



module.exports = router;

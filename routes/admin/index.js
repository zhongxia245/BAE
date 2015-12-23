'use strict';
/**
 * 后台管理的接口
 */
var express = require('express'),
    mongoose = require('mongoose'),
    mongoosekeeper = require('../../lib/mongoosekeeper'),
    Model = require('../../models/admin/models/nav_bae'),
    router = express.Router(),
    ObjectId = mongoose.Schema.Types.ObjectId;

/**
 * 获取常用工具集的导航地址数据][前端表格控件，指定URL，居然用Post，吐了]
 */
router.get('/getNav.do', function (req, res) {
    var criteria = req.query;
    var page = req.query.page;
    var pagesize = req.query.pagesize;
    var condition = {};
    for (var key in criteria) {
        if (criteria.hasOwnProperty(key) && key != "page" && key != "pagesize" && key != "changepage") {
            condition[key] = criteria[key];
        }
    }
    mongoosekeeper.use(function (proxy) {
        Model.execPageQuery(page, pagesize, condition, proxy);
    }, function (err, data) {
        if (err) {
            console.log(err);
           
        }
        res.send(data);
    });
});

/**
 * 添加导航数据
 */
router.post('/addNav.do', function (req, res, next) {
    var doc = req.body;
    mongoosekeeper.use(function (proxy) {
        Model.create(doc, proxy);
    }, function (err) {
        if (err) {
            console.log(err);
           
        } else {
            res.send(true);
        }
    });
});

/**
 * 修改
 */
router.post('/updateNav.do', function (req, res, next) {
    var doc = req.body;
    var update = {};
    for (var key in doc) {
        if (doc.hasOwnProperty(key) && key != "_id") {
            update[key] = doc[key];
        }
    }
    var id = doc._id;
    console.log(new Date() + ":update param:" + doc.title)
    var conditions = {
        _id: mongoose.Types.ObjectId(id)
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
            console.log(err);
           
        } else {
            console.log(new Date() + ":update success!:")
            res.send(true);
        }
    });
});

/**
 * 删除
 */
router.get('/deleteNav.do', function (req, res, next) {
    var ids = req.query.id.split(',');
    mongoosekeeper.use(function (proxy) {
        Model.remove({_id: {$in: ids}}, proxy);
    }, function (err) {
        if (err) {
            console.log(err);
           
        } else {
            res.send(true);
        }
    });
});


/*******初始化之前的旧数据 Start****************/
router.get('/addTool.do', function (req, res, next) {
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
        mongoosekeeper.use(function (proxy) {
            Model.create(doc, proxy);
        }, function (err) {
            if (err) {
                console.log(err);
               
            } else {
                console.log('save ok');
                res.send(true);
            }
        });
    }
});

router.get('/addBKLL.do', function (req, res, next) {
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
        mongoosekeeper.use(function (proxy) {
            Model.create(doc, proxy);
        }, function (err) {
            if (err) {
                console.log(err);
               
            } else {
                console.log('save ok');
                res.send(true);
            }
        });
    }
});

router.get('/addKKJ.do', function (req, res, next) {
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
        mongoosekeeper.use(function (proxy) {
            Model.create(doc, proxy);
        }, function (err) {
            if (err) {
                console.log(err);
               
            } else {
                console.log('save ok');
                res.send(true);
            }
        });
    }
});
/*******初始化之前的旧数据 End****************/



module.exports = router;

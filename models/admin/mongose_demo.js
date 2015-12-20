/**
 * Created by zhongxia on 2015/12/19.
 */
// mongoose 连接
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/test');

// 链接错误
db.on('error', function (error) {
    console.log(error);
});

console.log('connection mongodb success!');

//骨架模板
var navSchema = new mongoose.Schema({
    name: {type: String, default: '导航链接'},
    url: {type: String},
    title: {type: String},
    category: {type: String},
    count: {type: Number},
    img: {type: String, default: 'img/kancloud.png'},
    createtime: {type: Date, default: Date.now},
    remark: {type: String}
});

// 添加 mongoose 实例方法
navSchema.methods.findbyname = function (name, callback) {
    return this.model('nav').find({name: name}, callback);
}

// 添加 mongoose 静态方法，静态方法在Model层就能使用
navSchema.statics.findbycategory = function (category, callback) {
    return this.model('nav').find({category: category}, callback);
}

// models
var navModel = db.model('nav', navSchema);

// 增加记录 基于 entity 操作
var doc = {name: 'emtity_demo_username', url: 'emtity_demo_title', category: 'emtity_demo_content'};
var navEntity = new navModel(doc);
navEntity.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
    //db.close();
});


// 增加记录 基于model操作
var doc = {name: 'model_demo_username', url: 'model_demo_title', category: 'model_demo_content'};
navModel.create(doc, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('save ok');
    }
    // 关闭数据库链接
    //db.close();
});

/*=======================update=========================*/
// 修改记录
//navModel.update(conditions, update, options, callback);
var conditions = {name: 'model_demo_username'};
var update = {$set: {img: 27, url: 'model_demo_title_update'}};
var options = {upsert: true};
navModel.update(conditions, update, options, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('update ok!');
    }
    //关闭数据库链接
    //db.close();
});

/*===================select==================*/
// 查询
// 基于实例方法的查询
var navEntity = new navModel({});
navEntity.findbyname('model_demo_username', function (error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
    //关闭数据库链接
    //db.close();
});

// 基于静态方法的查询
navModel.findbycategory('emtity_demo_title', function (error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
    //关闭数据库链接
    //db.close();
});

// mongoose find
var criteria = {url: 'emtity_demo_title'}; // 查询条件
var fields = {title: 1, url: 1, time: 1}; // 待返回的字段
var options = {};
navModel.find(criteria, fields, options, function (error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
    //关闭数据库链接
    //db.close();
});

// 删除记录
var conditions = {name: 'emtity_demo_username'};
navModel.remove(conditions, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('delete ok!');
    }
    //关闭数据库链接
    //db.close();
});

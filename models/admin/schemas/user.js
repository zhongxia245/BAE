/**
 * Created by zhongxia on 2015/12/26.
 */
var mongoose = require('mongoose');

/**
 * 用户类
 * @type {mongoose}
 */
var UserSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
    enable: {type: Boolean, default: true},   //是否启用
    permissionLevel: {type: Number, default: 0},  //用户权限 0 表示管理员，其他目前没有
    meta: {
        createAt: {type: Date, default: Date.now()},
        updateAt: {type: Date, default: Date.now()}
    }
});

module.exports = UserSchema;

/**
 * pre的意思：每次在存储数据之前，都会来调用该方法
 * @param  保存
 * @return {[type]}       [description]
 */
UserSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    //执行下步操作，这样才能把存储流程走下去
    next();
});

//后期可以整理出来，放在Schema上
UserSchema.statics = {
    /**
     * 按照更新时间获取全部
     * */
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },
    /*
     * 根据ID获取
     * */
    findById: function (id, cb) {
        return this
            .findOne({
                _id: id
            })
            .exec(cb);
    },
    /*
     *删除全部
     * */
    removeAll: function (cb) {
        return this
            .remove({})
            .exec(cb);
    },
    /*
     * 分页查询
     * model.execPageQuery(1,10,{name:'zhongxia'},function(err,data){})
     * */
    execPageQuery: function (currentPage, pageSize, conditions, fields, options, callback) {
        var page = {}; //总页数 总条数 集合
        //设置参数
        if ('function' == typeof conditions) {
            callback = conditions;
            conditions = {};
            fields = null;
            options = null;
        }
        else if ('function' == typeof fields) {
            callback = fields;
            fields = null;
            options = null;
        }
        else if ('function' == typeof options) {
            callback = options;
            options = null;
        }
        var StartLine = (currentPage - 1) * pageSize;
        var m = this;


        //通过回调执行两个方法，保证同步
        var cb = function (err, rs) {
            if (err) {
                console.log(err);
                return;
            }
            page.Rows = rs;
            m.count(conditions, function (err1, rs) {
                if (err1) {
                    console.log(err1);
                    return;
                }
                page.Total = rs;
                callback(err1, page);
            });
        };


        if ('function' == typeof conditions) {
            m.find({}).limit(pageSize).skip(StartLine).exec(cb);
        } else if ('function' == typeof fields) {
            m.find(conditions).limit(pageSize).skip(StartLine).exec(cb);
        } else if ('function' == typeof options) {
            m.find(conditions, fields).limit(pageSize).skip(StartLine).exec(cb);
        } else {
            m.find(conditions, fields, options).limit(pageSize).skip(StartLine).exec(cb);
        }
    }
}


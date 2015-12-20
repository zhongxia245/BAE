var mongoose = require('mongoose');

/**
 * 电影模式类，提供数据库的增改改查方法
 * @type {mongoose}
 */
var NavSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    url: {
        type: String
    },
    category: {
        type: String
    },
    count: {
        type: Number
    },
    img: {
        type: String,
        default: 'img/kancloud.png'
    },
    remark: {
        type: String
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

/**
 * pre的意思：每次在存储数据之前，都会来调用该方法
 * @param  保存
 * @return {[type]}       [description]
 */
NavSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    //执行下步操作，这样才能把存储流程走下去
    next();
});

NavSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },
    findById: function (id, cb) {
        return this
            .findOne({
                _id: id
            })
            .exec(cb);
    },
    removeAll: function (cb) {
        return this
            .remove({})
            .exec(cb);
    },
    execPageQuery: function (currentPage, pageSize, conditions, fields, options, callback) {
        var cb = function (err, rs) {
            var page = {}; //总页数 总条数 集合
            page.total = rs.length;
            page.rows = rs;
            callback(err, page);
        };
        if ('function' == typeof conditions) {
            callback = conditions;
            conditions = {};
            fields = null;
            options = null;
        } else if ('function' == typeof fields) {
            callback = fields;
            fields = null;
            options = null;
        } else if ('function' == typeof options) {
            callback = options;
            options = null;
        }
        var StartLine = (currentPage - 1) * pageSize;
        var m = this;
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

module.exports = NavSchema;

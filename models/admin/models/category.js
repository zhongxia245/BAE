/**
 * Created by zhongxia on 2015/12/23.
 * 使用连接到BAE，非长连接的形式
 * BAE中，MongoDB不支持长连接，因为用户使用同一个数据库，导致每30秒没有请求就断开连接
 * 网上有大神写了一些断开重连的方法，因此需要修改一些代码
 */
var mongokeeper = require('../../../lib/mongoosekeeper');
var CategorySchema = require('../schemas/category');
var Category = mongokeeper.db.model('Category', CategorySchema);
module.exports = Category;


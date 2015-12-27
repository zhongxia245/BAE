/**
 * Created by zhongxia on 2015/12/26.
 * 用户类
 */
var mongokeeper = require('../../../lib/mongoosekeeper');
var UserSchema = require('../schemas/User');
var User = mongokeeper.db.model('User', UserSchema);
module.exports = User;


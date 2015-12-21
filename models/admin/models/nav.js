var mongoose = require('mongoose');
var NavSchema = require('../schemas/nav');
//var mongokeeper  = require('../../lib/mongoosekeeper');
//因为使用了createConnection 这里要使用mongokeeper.db.model
//而不是mongoose.model
//return mongokeeper.db.model('article', articleSchema);
//var Nav = mongokeeper.mongoose.model('Nav', NavSchema);
var Nav = mongoose.model('Nav', NavSchema);

module.exports = Nav;
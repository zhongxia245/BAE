/**
 * Created by zhongxia on 2015/12/23.
 */
var log4js = require('log4js');
var config = require('./../config.js')
var log = {};
log4js.loadAppender('baev3-log');
log4js.addAppender(log4js.appenders['baev3-log'](config.log));
var logger = log4js.getLogger('node-log-sdk');
log.debug = function (msg) {
    logger.debug(new Date() + " : " + msg);
}
log.trace = function (msg) {
    logger.trace(new Date() + " : " + msg);
}
log.info = function (msg) {
    logger.info(new Date() + " : " + msg);
}
log.warn = function (msg) {
    logger.warn(new Date() + " : " + msg);
}
log.error = function (msg) {
    logger.error(new Date() + " : " + msg);
}
log.fatal = function (msg) {
    logger.fatal(new Date() + " : " + msg);
}
exports = module.exports = log;

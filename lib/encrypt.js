/**
 * Created by zhongxia on 2015/12/26.
 */
/**
 * MD5加密方法
 * @param data 需要加密的数据
 * @returns 返回加密后的数据
 */
module.exports = function md5(data) {
    var Buffer = require("buffer").Buffer;
    var buf = new Buffer(data);
    var str = buf.toString("binary");
    var crypto = require("crypto");
    return crypto.createHash("md5").update(str).digest("hex");
}
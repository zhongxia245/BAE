var mongoose = require("mongoose");
// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect('mongodb://localhost/bae_test');

console.log('连接mongoDB成功！');

//骨架模版
var movieSchema = new mongoose.Schema({
    doctor: String,
    title: String,
    language: String,
    country: String,
    year: Number,
    summary: String,
    poster: String,
    flash: String
});

//模型
var Movie = mongoose.model('Movie', movieSchema);


//存储数据
var moive = new Movie({
    title: '黑衣人三111',
    doctor: '史密斯',
    year: 2018,
    flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
    country: '美国',
    language: '英语',
    summary: '好片'
});
//保存数据库
moive.save(function (err) {
    if (err) {
        console.log('保存失败')
        return;
    }
    console.log('保存成功');
});


moive.update({
    title: '黑衣人三'
}, {
    $set: {
        title: 'zhongxia',
        year: 2005
    }
}, function (err) {
    if (err) {
        console.log(err)
        return;
    }
    console.log('更新成功')
});

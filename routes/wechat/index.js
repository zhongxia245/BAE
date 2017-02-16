var express = require('express');
var wechat = require('wechat');
var request = require('request');
var config = require('../../config');
var router = express.Router();

var wechat_config = {
  token: config.wechat.token,
  appid: config.wechat.appid,
  encodingAESKey: config.wechat.encodingAESKey,
  checkSignature: false // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

router.all('/wechat', wechat(wechat_config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;

  console.log('message', JSON.stringify(message))

  if (message.Content === 'diaosi') {
    // 回复屌丝(普通回复)
    res.reply('hehe');
  }
  else if (message.Content === 'text') {
    //你也可以这样回复text类型的信息
    res.reply({
      content: 'text object',
      type: 'text'
    });
  }
  else if (message.Content === 'hehe') {
    // 回复一段音乐
    res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://web.catics.org/edu/course/diandu/uploads/20a98e52998df99209d5fed0b3bd3588.mp3",
        hqMusicUrl: "http://web.catics.org/edu/course/diandu/uploads/20a98e52998df99209d5fed0b3bd3588.mp3",
        thumbMediaId: "thisThumbMediaId"
      }
    });
  }
  else if (message.Content === 'test') {
    res.reply({
      type: 'hardware',
      HardWare: {
        MessageView: 'myrank',
        MessageAction: 'ranklist'
      }
    });
  }
  else {
    // 回复高富帅(图文回复)
    res.reply([
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=e6910bab46166d222777139276220945/5882b2b7d0a20cf482c772bf73094b36acaf997f.jpg',
        url: 'http://zhongxia.duapp.com/'
      }
    ]);
  }
}));


module.exports = router;
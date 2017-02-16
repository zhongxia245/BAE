var express = require('express');
var router = express.Router();

router.all('/wechat', function (req, res, next) {
  console.log('request', req.query)
  res.send(req.query)
})

module.exports = router;
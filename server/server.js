var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var accountRelated = require('./accountRelated');
var galleryRelated = require('./galleryRelated');
var app = express();

// 跨域支持
app.all('*', (req, res, next) => {
  const origin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token,sign');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  next();
});

/**
 * 用户login判断
 */
app.post('/judgeLanding', bodyParser.json(), function(req, res) { 
 	accountRelated.judgeLanding(req, res); 
})

/**
 * 用户注册
 */
app.post('/register', bodyParser.json(), function(req, res) {
	accountRelated.register(req, res);
})

/**
 * 用户获取头像和name
 */
app.post('/getUserAvatar', bodyParser.json(), function(req, res) {
	galleryRelated.getUserAvatar(req, res);
})

/**
 * 获取图片相关信息
 */
app.get('/getPhoto', bodyParser.json(), function(req, res) {
	galleryRelated.getPhoto(req, res);
})

app.post('/changeLikeNum', bodyParser.json(), function(req, res) {
	galleryRelated.changeLikeNum(req, res);
})


app.listen(3000);
console.log('server opening at localhost:3000');
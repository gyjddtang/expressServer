/**
 * Created by Mili on 2017/6/22.
 */

let express = require('express');
let httpsRequest = require('../utils/http');
let userData = require('../mock/index');

let wisdomschool = express.Router();

wisdomschool.route('/wisdomschool/phone/login/doLogin')
  .post(function (req, res, next) {
    // res.send(userData);   //使用mock模拟数据
    httpsRequest(req, res, next);   //请求后端正式服务器
  }, function (req, res, next) {
    
  });

module.exports = wisdomschool;

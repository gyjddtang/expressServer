/**
 * Created by Mili on 2017/6/22.
 */

var Mock = require('mockjs');

let Random = Mock.Random;
Random.cname();
Random.date();
Random.ctitle();
Random.city(true);
Random.url('http');

let userData = Mock.mock({
  name: '@cname',
  birthday: '@date',
  'interest|1-10': '打',
  'list|1-6': [{
    title: '@ctitle',
    address: '@city',
    url: '@url'
  }]
});

module.exports = userData;

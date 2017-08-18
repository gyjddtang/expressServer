/**
 * Created by Mili on 2017/6/23.
 */

let https = require('https');
let remoteHost = require('./remote');

let httpsRequest = function (req, res) {
  let options = {
    hostname: remoteHost,
    path: req.path,
    method: req.method,
    headers: {
      'Content-Type': req.headers['content-type'],
      "Content-Length": req.headers['content-length']
    }
  };

  let request = https.request(options, serverFeedback => {
    // console.log(`状态码: ${serverFeedback.statusCode}`);
    // console.log(`响应头: ${JSON.stringify(serverFeedback.headers)}`);

    let serverRes;
    serverFeedback.setEncoding('utf8');

    if(serverFeedback.statusCode == 200) {
      serverFeedback.on('data', result => {
        // console.log(`响应主体: ${result}`);
        serverRes = result;
      });
      serverFeedback.on('end', () => {
        res.send(serverRes);
      });
    } else {

    }
  });

  request.on('error', (e) => {
    console.error(`后端请求遇到问题: ${e.message}`);
  });

  // 写入数据到请求主体
  request.write(JSON.stringify(req.body));
  request.end();
};

module.exports = httpsRequest;
var http = require('http');
var random = require('./modules/random');
var convert = require('./modules/convert');
var work = require('./modules/dowork');

http.createServer(function(req, res) {
  res.writeHead(200);
  //res.write(random(100,1000000).toString());
  //res.write(convert(500000)).toString();
  res.write(work.accBal());
  res.write(work.dowork());
  res.end();
}).listen(3000);

console.log('port 3000 online Captain!');

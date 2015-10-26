// node/http-server.js

var content = '<html>'+
      '<head><title>Hello world</title></head>' +
      '<body><p>Hello World</p></body>' +
      '<script type="text/javascript">alert("Hi!");</script>' +
   '</html>';

var handle = function (request, response) {
   response.end(content);
};

var http = require('http');
var server = http.createServer(handle);

server.listen(8080, '192.168.33.10');

console.log('Server running at http://localhost:8080/.');

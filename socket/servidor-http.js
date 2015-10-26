var net = require('net');

var handle = function(data) {
   console.log('### cliente [' + this.remoteAddress + ':'+ this.remotePort + ']');
   console.log(data.toString());
   console.log('###');

   var metodo = data.toString(undefined,0,3);
   if ( ehMetodoHttpValido(metodo) ) {
      this.write('200 OK');
   } else {
      this.write('400 BAD REQUEST');
   }
   this.end();
};

var ehMetodoHttpValido = function(metodo) {
   switch (metodo) {
      case 'OPTIONS':
      case 'GET':
      case 'HEAD':
      case 'POST':
      case 'PUT':
      case 'DELETE':
      case 'TRACE':
      case 'CONNECT':
         return true;
         break;
      default:
         return false;
   }
};

var server = net.createServer();

server.on('listening', function() {
   console.log('# Servidor AGUARDANDO conexões...');
});

server.on('close', function() {
   console.log('# Servidor DESLIGADO');
});

server.on('connection', function(socket) {
   socket.on('data', handle);
});

server.listen(80);

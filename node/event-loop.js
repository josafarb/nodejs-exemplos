// node/event-loop.js

setTimeout(function() {
   console.log('setTimeout at ' + new Date().toTimeString());
}, 1000);

require('fs').readFile('/etc/passwd', function(err, result) {
  console.log( result.toString() );
} );

// node/require/models/Professor.js
// objetivo:
//      Demonstrar o uso de arquivos diferentes em js
//
'use strict';

// classe e construtor juntos
var Social = function(url, id) {
    this.url = url || '';
    this.id = id || '';
};

module.exports = Social;

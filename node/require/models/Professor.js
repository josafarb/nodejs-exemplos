// node/require/models/Professor.js
// objetivo:
//      Demonstrar o uso de arquivos diferentes em js
//
'use strict';

// classe e construtor juntos
var Professor = function(matricula) {
    this.matricula = matricula || '';
};

module.exports = Professor;

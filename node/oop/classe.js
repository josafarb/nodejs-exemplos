// node/oop/classe.js
// objetivo:
//      Demonstrar o uso de classe com sintaxe
//      function em js
//
'use strict';

// classe e construtor juntos
var Pessoa = function(cpf) {
    this.id = Math.random();
    this.cpf = cpf;
    this.email = undefined;
    this.nome = undefined;
    this.social = {};
};

var minora = new Pessoa('83758194415');
minora.email = 'leonardo.minora@gmail.com';
minora.nome = 'Leonardo Ataide Minora'

console.log(minora);

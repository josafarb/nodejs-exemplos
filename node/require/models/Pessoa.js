// node/require/models/Pessoa.js
// objetivo:
//      Demonstrar o uso de arquivos diferentes em js
//
'use strict';
var Aluno = require('./Aluno');
var Professor = require('./Professor');
var Social = require('./Social');

// classe e construtor juntos
var Pessoa = function(cpf) {
    this.id = Math.random();
    this.cpf = cpf;
    this.email = undefined;
    this.nome = undefined;
    this.social = {};
    this.perfil = {};
    objetos++;
};

Pessoa.prototype.addRedesocial = function(url, id, nome) {
    this.social[nome] = new Social(url, id);
};

Pessoa.prototype.addPerfil = function(matricula, perfil) {
    // implementar
};

var objetos = 0;
function getQuantidadeDeInstancias() {
    return objetos;
}

module.exports = Pessoa;
module.exports.getNumeroDeInstancias = getQuantidadeDeInstancias;

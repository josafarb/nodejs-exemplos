// node/oop/metodos.js
// objetivo:
//      Demonstrar o uso de métodos de objeto em js
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
// método addRedesocial
// escopo objeto
Pessoa.prototype.addRedesocial = function(url, id, nome) {
    var nova = {};
    nova.url = url || '';
    nova.id = id || this.nome;
    this.social[nome] = nova;
};

var minora = inicialize();
minora.addRedesocial('http://facebook.com/leonardo.minora',
    'leonardo.minora', 'facebook');
minora.addRedesocial('http://twitter.com/leonardominora',
        'leonardominora', 'twitter');

console.log(minora);




function inicialize() {
    var objeto = new Pessoa('83758194415');
    objeto.email = 'leonardo.minora@gmail.com';
    objeto.nome = 'Leonardo Ataide Minora'
    return objeto;
}

// node/require/main.js
// objetivo:
//      Demonstrar o uso de arquivos diferentes em js
//
'use strict';

var Pessoa = require('./models/Pessoa');

var objeto = new Pessoa('00000000000');
objeto.addRedesocial('http://facebook.com/leonardo.minora',
    'leonardo.minora', 'facebook');
objeto.addRedesocial('http://twitter.com/leonardominora',
    'leonardominora', 'twitter');
objeto.addPerfil('2422958', 'professor');
console.log(objeto);

console.log('## Número de instâncias de Pessoa -> ' + Pessoa.getNumeroDeInstancias());
[1,2,3,4,5].forEach( function(item){ new Pessoa('000'+item) } );
console.log('## Número de instâncias de Pessoa -> ' + Pessoa.getNumeroDeInstancias());

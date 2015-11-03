// node/oop/atributos.js
// objetivo:
//      Demonstrar o uso de objeto JSON em js
//
'use strict';

var pessoa = {
    id : 123,
    email : 'leonardo.minora@gmail.com',
    nome : 'Leonardo Ataide Minora',
    social : {
        github : { id : 'leonardo-minora' },
        twitter : { id : 'leonardominora' },
        facebook : { id : 'leonardo.minora' }
    }
};

console.log(pessoa);

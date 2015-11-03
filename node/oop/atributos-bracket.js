// node/oop/atributos-bracket.js
// objetivo:
//      Demonstrar o uso de atributos de objeto
//      com a notação de colchetes (brackets)
//      em js
//
'use strict';

var pessoa = new Object();
var attrName = 'email';

pessoa['id'] = 123;
pessoa[attrName] = 'leonardo.minora@gmail.com';

console.log(pessoa);

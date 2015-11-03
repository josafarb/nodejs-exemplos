// node/oop/atributos.js
// objetivo:
//      Demonstrar o uso de atributos de objeto em js
//
'use strict';

var pessoa = new Object();
pessoa.id = 123;
pessoa.email = 'leonardo.minora@gmail.com';
pessoa.nome = 'Leonardo Ataide Minora';

pessoa.social = new Object();

pessoa.social.facebook = new Object();
pessoa.social.facebook.id = 'leonardo.minora';

pessoa.social.twitter = new Object();
pessoa.social.twitter.id = 'leonardominora';

pessoa.social.github = new Object();
pessoa.social.github.id = 'leonardo-minora';

console.log(pessoa);

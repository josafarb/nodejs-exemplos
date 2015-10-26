// node/iterators.js

// iteração sob arrays
console.log('### Array');
var array = ['foo', 1, 2];
for(var ind in array) {
  console.log('[' + ind + '] ' +
      array[ind]);
};
// console.log(array);

// iteração sob propriedades de objetos
console.log('### Objeto JSON');
var objetoJSON = {
   oid: 'valor',
   nome: 'Leonardo Minora',
   email: 'leonardo.minora@ifrn.edu.br'
};
for (var propriedade in objetoJSON) {
   console.log('[' + propriedade + '] ' +
         objetoJSON[propriedade]);
};
// console.log(objetoJSON);

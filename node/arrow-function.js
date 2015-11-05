// node/arrow-function.js
// objetivo:
//      Demonstrar o uso de Arrow Functions em js
//

var arr = ['Hydrogen','Helium','Lithium','Beryl­lium'];
console.log(arr);

// função anônima
var arr2 = arr.map(function(item){ return item.length });
console.log('## function()... ' + arr2);

// função arrow
var arr3 = arr.map( item => item.length );
console.log('## ... => ... ' + arr3);

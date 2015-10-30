// node/array-2.js
// objetivo:
//     demonstrar os métodos filter, forEach, map

var arr = [ 1, 2, 3, 4];
console.log('# array ' + arr);

var arrFiltrada = arr.filter(function(item) {
    return (item % 2 == 0);
});
console.log('# array filtrada ' + arrFiltrada);

arr.forEach(function(item) {
  console.log('# item ' + item);
});
console.log('# arr ' + arr);

var arrMapeada = arr.map(function(item) {
    return item * 10;
});
console.log('# array mapeada ' + arrMapeada);

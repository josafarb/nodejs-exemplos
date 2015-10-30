// node/array-5.js
// objetivo:
//      demonstrar os métodos every e some

var arr = [2, 15, 8, 11, 4];

function ehMaiorQue10(element, index, array) {
  return element > 10;
};

console.log(arr);
console.log('# arr.every -> ' + arr.every(ehMaiorQue10));
console.log('# arr.some -> ' + arr.some(ehMaiorQue10));

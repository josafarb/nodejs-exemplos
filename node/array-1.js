// node/array-1.js
// objetivo:
//     demonstrar os métodos push, pop, shift e unshift

var arr = [ 'a', 'd', 'c'];

console.log('# Array.isArray ' + Array.isArray(arr));
console.log('# arr.push ' + arr.push('b'));
console.log('## arr ' + arr);
console.log('# arr.pop ' + arr.pop());
console.log('## arr ' + arr);

console.log('# arr.unshift ' + arr.unshift('1'));
console.log('## arr ' + arr);
console.log('# arr.shift ' + arr.shift());
console.log('## arr ' + arr);

console.log('# arr.sort ' + arr.sort());
console.log('## arr ' + arr);

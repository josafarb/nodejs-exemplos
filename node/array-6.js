// node/array-6.js
// objetivo:
//      demonstrar os métodos ECMA concat,
//      join, slice, reverse, splice

var arr = ['a', 'b', 'c'];
var a = ['d', 'e', 'f'];
var b = [1, 2, 3];

console.log(arr);
console.log('\n# arr.concat'  );
console.log( arr.concat(a, b) );
console.log('\n# arr.join !');
console.log( arr.join('! ') );

console.log('\n# arr.slice 1, 2' );
console.log( arr.slice(1, 2) );
console.log('# arr.slice 1, 3' );
console.log( arr.slice(1, 3) );

console.log('\n# arr.reverse');
console.log( arr.reverse() );

console.log('\n# arr.splice 0, 1');
console.log( arr.splice(0, 1) );
console.log('\n# arr.splice 0, 2');
console.log( arr.splice(0, 2) );

console.log('\n# b.splice 1, 1');
console.log( b.splice(1, 1, 'foo', 'bar') );

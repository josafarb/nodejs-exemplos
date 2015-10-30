// node/array-3.js
// objetivo:
//     demonstrar os métodos reduce e reduceRight

var arr = [10, 1, 2, 3, 4];
var handle = function(previousValue, currentValue, index, array) {
    console.log('previous value ' + previousValue);
    console.log('current value ' + currentValue);
    console.log('index ' + index);
    console.log('array ' + array);
    return previousValue + currentValue;
};

console.log('### arr.reduce ' +
    arr.reduce(handle) +
    '\n');
console.log('### arr.reduceRight ' +
    arr.reduceRight(handle) +
    '\n');

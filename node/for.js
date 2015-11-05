// node/for.js
// objetivo:
//      Demonstrar o uso de for-in e for-of em js
//

var arr = [3, 5, 7];
arr.fake = "Alo";

console.log('## for-in');
for (item in arr) {
    console.log(item + ' -> ' + arr[item]);
}

console.log('## for-of');
for (item of arr) {
    console.log(item);
}

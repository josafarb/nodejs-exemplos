// node/escopo-3.js

console.log('### 3o caso');
var data = [];
for (var i = 0; i < 5; i++) {
    data[i] = function foo() {
        console.log(i);
    };
};
data[0](); data[1](); data[2](); data[3](); data[4]();

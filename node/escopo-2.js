// node/escopo-2.js

console.log('### 2o caso');
for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
};

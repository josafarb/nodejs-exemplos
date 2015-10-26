// node/escopo-4.js

console.log('### 4o caso');
function processar(valor) {
    console.log(valor);
}
for (var i = 0; i < 5; i++) {
    setTimeout(processar(i), 100);
};

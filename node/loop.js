// node/loop.js
// objetivo:
//      Demonstrar o uso de estrutura de repetição em js
//

var step;

for (step = 0; step < 5; step++) {
    console.log('## for : passo ' + step);
};

do {
    console.log('## do...while : passo ' + step--);
} while (step > 0);

while (step < 5) {
    console.log('## while : passo ' + step++);
}

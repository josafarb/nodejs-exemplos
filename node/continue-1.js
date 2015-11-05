// node/break-1.js
// objetivo:
//      Demonstrar o uso de continue para pular
//      uma iteração dentro de uma estrutura
//      de repetição em js
//
i = 0;
n = 0;
while (i < 5) {
    i++;
    if (i == 3) {
        continue;
    }
    console.log('n = ' + n + ' + ' + i);
    n += i;
}

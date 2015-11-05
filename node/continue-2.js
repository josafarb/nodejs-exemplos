// node/break-1.js
// objetivo:
//      Demonstrar o uso de continue para pular
//      para um label em js
//
var i = 0;
var j = 10;
while (i < 4) {
    console.log('i = ' + i);
    i++;
    checkj:
    while (j > 4) {
        j--;
        if ((j % 2) == 0) {
            console.log('j = ' + j);
            continue checkj;
        }
        console.log('[j] ' + j + " is odd.");
    }
}

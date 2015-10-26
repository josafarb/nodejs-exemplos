
// definindo funções
function abrirConexao() {
   console.log('### CONECTADO');
};
function receberMensagem(data) {
    console.log("### Pacote recebido:\n---\n");
    console.log(data.toString());
    console.log("---\n");
};
function finalizarConexao() {
   console.log('### DESCONECTADO');
};

// criando um objeto para o socket cliente
var socketCliente = require('net').Socket();

// Definindo os eventos para o socket cliente
socketCliente.on('connect', abrirConexao);
socketCliente.on('data', receberMensagem);
socketCliente.on('end', finalizarConexao);

// conectando, enviando mensagem de requisição
//   e fechando o socket cliente
socketCliente.connect(80, 'google.com');
socketCliente.write('GET / HTTP/1.1\n\n');
socketCliente.end();

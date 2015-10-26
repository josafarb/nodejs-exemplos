// node/this-6.js

// Constructor
function Pessoa(id) {
  // always initialize all instance properties
  self = this;
  this.id = id;
  this.nome = 'Anonimo'; // default value
}
// methods
Pessoa.prototype.printID = function() {
    console.log('[' + self.id + '] ' + self.nome);
};

var objeto = new Pessoa(Math.random());

objeto.printID();
var callback = objeto.printID;
callback();

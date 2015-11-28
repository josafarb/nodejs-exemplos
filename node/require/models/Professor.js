'use strict';
var Professor = function(matricula,setor,dataa,tipoContrato,jornadaTrabalho){
  this.matricula = matricula;
  this.setor = setor;
  this.dataa = dataa;
  this.tipoContrato= tipoContrato;
  this.jornadaTrabalho = jornadaTrabalho;
  console.log('PROFESSOR CONTRATADO !');
};
module.exports = Professor;

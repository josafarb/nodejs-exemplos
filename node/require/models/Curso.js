'use strict';
var Curso = function(ano,semestre,codigo,seq,digito,nome){
  global.ano = ano;
  global.semestre = semestre;
  global.codigo = codigo;
  global.seq = seq;
  global.digito = digito;
  global.nomeGlobal = nome;
};


 function validarNome(nomeCurso){
  var podeMatricular = 0;
  if(nomeCurso == nomeGlobal){
   podeMatricular =1;
  }
  return podeMatricular;
}

function pegarMatricula(){
  var numeroMatricula = ano + semestre+ seq + digito;
  return numeroMatricula;
}
module.exports = Curso;
module.exports.validarNome = validarNome;
module.exports.pegarMatricula = pegarMatricula;

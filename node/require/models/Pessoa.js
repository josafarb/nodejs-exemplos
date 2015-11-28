
'use strict';
var Aluno = require('./Aluno');
var Professor = require('./Professor');
var Social = require('./Social');
var Curso = require('./Curso');

// classe e construtor juntos
var Pessoa = function(cpf) {
    this.id = Math.random();
    this.cpf = cpf;
    this.email = undefined;
    this.nome = undefined;
    this.social = {};
    this.perfil = {};
    this.contratacao={};
    objetos++;
};

var numeroProfessor = 0;

// Prototype = Usados para métodos de objeto
Pessoa.prototype.addRedesocial = function(url, id, nome) {
    this.social[nome] = new Social(url, id);
};

/** Método usado para matricular professor verficando as condições necessárias para o cadastro*/
Pessoa.prototype.contratarProfessor = function(matricula,setor,data,tipoContrato,jornadaTrabalho){
      if(matricula != '' && setor != '' && data !='' && (tipoContrato == 'permanente' || tipoContrato=='temporario') && (jornadaTrabalho =='20' || jornadaTrabalho=='40')){
           var professor = new Professor(matricula,setor,data,tipoContrato,jornadaTrabalho);
           this.contratacao['Professor']  = professor;
    }else{
      console.log("Alguma informação está errada, O PROFESSOR NÃO PODE SER CONTRATADO");
  }
}

/** Método para matricular aluno verificando se o curso desejado existe*/
Pessoa.prototype.matricularAluno = function(nomeDoCurso){
    var  validar =   Curso.validarNome(nomeDoCurso);
    if(validar == 0){
      console.log("O aluno não pode ser cadastrado");
    }else if(validar == 1){
      var matriculaAluno = Curso.pegarMatricula();
      var  aluno  =  new Aluno(matriculaAluno);
    }
}
/** Método modificado da Prática 3
Pessoa.prototype.addPerfil = function(matricula, perfil) {
  if(perfil == 'professor'){
    this.perfil[perfil] = new Professor(matricula,numeroProfessor);
    numeroProfessor ++;
  }else if(perfil=='aluno'){
    this.perfil[perfil] = new Aluno(matricula);
  }
}; */
var objetos = 0;
function getQuantidadeDeInstancias() {
    return objetos;
}
module.exports = Pessoa;
module.exports.getNumeroDeInstancias = getQuantidadeDeInstancias;

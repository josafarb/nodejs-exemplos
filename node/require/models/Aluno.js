'use strict';
var Aluno = function(matricula){
        this.matricula = matricula || '';
    console.log("ALUNO MATRICULADO COM SUCESSO!,A matricula do aluno é  " + this.matricula);
};
module.exports = Aluno;

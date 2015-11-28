'use strict';

var Pessoa = require('./models/Pessoa');
var Curso = require('./models/Curso');
var objeto = new Pessoa('00000000000');
objeto.addRedesocial('http://facebook.com/leonardo.minora',
    'leonardo.minora', 'facebook');
objeto.addRedesocial('http://twitter.com/leonardominora',
    'leonardominora', 'twitter');

objeto.contratarProfessor('123','1','20/10/2015','permanente','20'); /** Contratando o professor */

/**  Para matricular o aluno primeiro é preciso cadastrar o curso*/
var  cursoMatematica = new Curso('2015','1','321','987','2','matematica');

/** Cadastrando o aluno e dizendo seu curso */
var aluno = new Pessoa('11111111');// criando instancia de aluno
aluno.addRedesocial('http://RedeSocialDoAluno','face');//adicionando rede social do aluno
aluno.matricularAluno('matematica');// adicionando matricula do aluno

/**
Aqui ocorram os testes pedidos na realizaçõa da questão dois da prática três
usei para demostrar que  era permitido adicionar somente um perfil para professor e
vários para aluno
objeto.addPerfil('2422958', 'professor');
objeto.addPerfil('123', 'professor');
objeto.addPerfil('321', 'aluno'); */


console.log('## Numero de instancias de Pessoa -> ' + Pessoa.getNumeroDeInstancias());
/*[1,2,3,4,5].forEach( function(item){
   new Pessoa('000'+item) }
);
console.log('## Numero de instâncias de Pessoa -> ' + Pessoa.getNumeroDeInstancias()); */

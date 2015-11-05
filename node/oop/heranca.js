// node/oop/heranca.js
// objetivo:
//      Demonstrar o uso de herança de classe em js
//
'use strict';

var ClassePai = function() {
    this.id = Math.random();
    this.attr = undefined;
};
ClassePai.prototype.metodo = function() {
    this.parte1();
    this.parte2();
    console.log('this.attr -> ' + this.attr);
};
ClassePai.prototype.parte1 = function() {
    console.log('ClassePai.parte1');
};
ClassePai.prototype.parte2 = function() {
    console.log('ClassePai.parte2');
};
var objetoClassePai = new ClassePai();
objetoClassePai.metodo();

var ClasseFilha = function(attr) {
    ClassePai.call(this);
    this.attr = attr || 'ClasseFilha';
};
ClasseFilha.prototype = Object.create(ClassePai.prototype);
ClasseFilha.prototype.constructor = ClasseFilha;
ClasseFilha.prototype.parte1 = function() {
    console.log('ClasseFilha.parte1');
};
var objetoClasseFilha = new ClasseFilha('attrFilha');
objetoClasseFilha.metodo();

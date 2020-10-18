const mod1                  = require('./modulo1');
const {imprimirMensagem}    = require('./modulo2');
const {imprimirMensagem2}   = require('./modulo2');

mod1("Meu primeiro módulo Node.js");
imprimirMensagem("Meu segundo módulo Node.js");
imprimirMensagem2("Meu segundo módulo op2 Node.js");

let t2 = '0';
let t3 = 0;

console.log('t3 == t2: '+t3 == t2);
console.log('t3 === t2: '+t3 === t2);
t2 += 2;
t3 += 2;

console.log(t2);
console.log(t3);
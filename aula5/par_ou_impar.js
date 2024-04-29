// Exercício 1: par ou ímpar

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));

let resultado = numero%2 == 0 ? 'par' : 'ímpar';
console.log(`O número ${numero} é ${resultado}`);

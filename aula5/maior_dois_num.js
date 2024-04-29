// Exercício 2: maior de dois números

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Insira o primeiro número: "));
let num2 = parseInt(prompt("Insira o segundo número: "));

if (num1 > num2) {
    console.log(`O número ${num1} é maior que o número ${num2}.`);
} else if (num1 < num2) {
    console.log(`O número ${num2} é maior que o número ${num1}.`);
} else {
    console.log(`Os números são iguais.`);
}
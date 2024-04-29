// Exercício 4: calculadora simples

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Insira o primeiro número: "));
let num2 = parseInt(prompt("Insira o segundo número: "));

let op = prompt("Insira a operação (+, -, *, /): ");

switch (op) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 !== 0){
            resultado = num1 / num2; 
        } else {
            console.log("Erro: divisão por zero.");
            resultado = undefined;
        }
        break;
    default:
        console.log("Operação Inválida!");
        resultado = undefined;

}
console.log(`O resultado é igual a ${resultado}`);
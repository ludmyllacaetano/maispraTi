// Exercício 1: par ou ímpar

const prompt = require('prompt-sync')();

// let numero = parseInt(prompt("Digite um número: "));

// let resultado = numero%2 == 0 ? 'par' : 'ímpar';
// console.log(`O número ${numero} é ${resultado}`);

// Exercício 2: maior de dois números

// let num1 = parseInt(prompt("Insira o primeiro número: "));
// let num2 = parseInt(prompt("Insira o segundo número: "));

// if (num1 > num2) {
//     console.log(`O número ${num1} é maior que o número ${num2}.`);
// } else if (num1 < num2) {
//     console.log(`O número ${num2} é maior que o número ${num1}.`);
// } else {
//     console.log(`Os números são iguais.`);
// }

// Exercício 3: triângulo

// let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado: "));
// let lado2 = parseInt(prompt("Insira o comprimento do segundo lado: "));
// let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado: "));

// if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//     console.log("É possível formar um triângulo com essas medidas.");
// } else {
//     console.log("Não é possível formar um triângulo.");
// }

// Exercício 4: calculadora simples

// let num1 = parseInt(prompt("Insira o primeiro número: "));
// let num2 = parseInt(prompt("Insira o segundo número: "));

// let op = prompt("Insira a operação (+, -, *, /): ");

// let resultado;

// switch (op) {
//     case '+':
//         resultado = num1 + num2;
//         break;
//     case '-':
//         resultado = num1 - num2;
//         break;
//     case '*':
//         resultado = num1 * num2;
//         break;
//     case '/':
//         if (num2 !== 0){
//             resultado = num1 / num2; 
//         } else {
//             console.log("Erro: divisão por zero.");
//             resultado = undefined;
//         }
//         break;
//     default:
//         console.log("Operação Inválida!");
//         resultado = undefined;

// }
// console.log(`O resultado é igual a ${resultado}`);

// if(op === '+'){
//     resultado = num1 + num2;
// } else if (op === '-') {
//     resultado = num1 - num2;
// } else if (op === '*') {
//     resultado = num1 * num2;
// } else if (op === '/') {
//     if (num2 !==0) {
//         resultado = num1 / num2;
//     } else {
//         console.log("Erro: divisão por zero.");
//         resultado = undefined;
//     }
// } else {
//     console.log("Operação inválida");
// }

// if (resultado !== undefined) {
//     console.log("Resultado: ", resultado);
// }

// switch case

// let dia = parseInt(prompt("Insira um número do dia da semana: "));

// let nomeDia;

// switch (dia) {
//     case 1:
//         nomeDia = "Domingo";
//         break;
//     case 2:
//         nomeDia = "Segunda-feira";
//         break;
//     case 3:
//         nomeDia = "Terça-feira";
//         break;
//     case 4:
//         nomeDia = "Quarta-feira";
//         break;
//     case 5:
//         nomeDia = "Quinta-feira";
//         break;
//     case 6:
//         nomeDia = "Sexta-feira";
//         break;
//     case 7:
//         nomeDia = "Sábado";
//         break;
//     default:
//         console.log("Digite um número de 1 a 7");
//         break;
// }

// console.log("O dia é: ", nomeDia);

// let mes = parseInt(prompt("Insira o número do mês (1 a 12): "));

// let diasDoMes;

// switch(mes) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         diasDoMes = 31;
//         break;
//     case 2:
//         diasDoMes = 28;
//         break;
//     default:
//         diasDoMes = 30;   
//         break;  
// }

// console.log(`O mês tem ${diasDoMes} dias.`);

// let contador = 0;
// let multiplicando = 5;

// // <variável>; <condição>; <incremento>
// for (multiplicando = 1; multiplicando <= 10; multiplicando++) {
//     for (contador = 0; contador <=10; contador++) {
//         console.log(`${multiplicando} * ${contador} = `, multiplicando * contador);
//     }
//     console.log("\n");
// }

// for (contador = 0; contador <=10; contador++) {
//     console.log(`${multiplicando} * ${contador} = `, multiplicando * contador);
// }

// for (let i = 0; i <=100; i+=2){
//     console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// let i = 10;

// while(i >= 1){
//     console.log(i);
//     i--;
// }

// imprimir os múltiplos de 5 menores que 100
// let i = 5;
// while (i <= 100){
//     console.log(i);
//     i+=5;
// }

// let num = 5;
// while(num <= 100){
//     if(num % 5 == 0){
//         console.log(num);
//     }
//     num++;
// }

// soma dos números de 1 a 1000
// i = 1;
// soma = 0;

// while(i <= 1000){
//     soma+=i;
//     i++;
// }
// console.log(soma);

// do while
// let senha;

// do {
//     senha = prompt("Digite a senha: ");
// } while (senha !== "1234");

// console.log("Senha correta!");

// Pedir para o usuário adivinhar um número entre 1 e 10

const numeroCorreto = Math.floor((Math.random() *10) + 1);
console.log(numeroCorreto);

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10: "));
    if (tentativa < numeroCorreto) {
        console.log("Tente um número maior")
    } else if (tentativa > numeroCorreto) {
        console.log("Tente um número menor")
    }
} while (tentativa !== numeroCorreto)

console.log("Parabens! Você acertou")
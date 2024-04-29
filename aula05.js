// o método 'log' do objeto 'console', utilizado para imprimir informações no console do navegador ou servidor
// ferramenta de debug
// console.log("Hello 'World'");
// console.log('Hello "World"');
// console.log(`Hello World`); // template para string

// nome = 'Ludmylla'; // variável global - não recomendado
let nome = 'Ludmylla'; // padrão
// var name = 'Ludmylla'; // antiga e inadequada
// const NAME = 'Ludmylla'; // variável que não muda - ex.: chave de banco de dados

// let aula = 5;
// let professor = 'Jaques';

// console.log(`Meu nome é ${nome} e estou na aula ${aula} do professor ${professor}`);

// undefined: erro. Ex.: uma variável não é inicializada.
// null: a variável é desconsiderada, intecionalmente. Ex.: um opção não é marcada em um questionário.

// let meuNumber = 10.1;
// console.log(typeof(meuNumber)); // retorna o tipo da variável

// let num1 = 10;
// let num2 = 5;

// // operações matemáticas 
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);
// console.log(num1 ** num2);

// let numTeste = "5";
// let numTeste2 = Number(numTeste);
// console.log(numTeste + num1);

// let contador = 1;
// console.log(contador);
// contador--;
// contador++;

// --contador; //pre decremento

// const passo = 5;
// let contador = 0;
// contador += passo;
// contador **= passo;

// console.log(10 < 5);
// console.log(10 <= 5);
// console.log(10 > 5);
// console.log(10 >= 5);
// console.log(10 == "10"); //valor
// console.log(10 == 10); //valor e tipo

// console.log((10 > 5) && (3 < 4));
// && conjunção
// || disjunção
// ! negação 

// const usuario = "Ludmylla";
// const senha = "123";

// const autenticacao = usuario === "Ludmylla" && senha === "12345";
// console.log(autenticacao);

// const nota = 30;

// if (nota >= 60) {
//     console.log("Aprovado");
// } else if (nota>=40 && nota <= 59) {
//     console.log("Recuperação");
// } else{
//     console.log("Reprovado");
// }

// operador ternário
/*
 Estrutura de decisão semelhante ao if/else, mas com sintaxe mais enxuta.
 Sintaxe:
 <condicao> ? <verdadeiro> : <falso>;
*/ 

// let resultadoTernario = (10<100) ? true : false;
// console.log(resultadoTernario);

const prompt = require('prompt-sync')();

let teste = prompt("Digite aqui seu nome:");
console.log(teste);
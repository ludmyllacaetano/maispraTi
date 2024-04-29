//Array ou Vetor

// let listaCompras = Array();

// listaCompras[0] = 'Shampoo';
// listaCompras[1] = 'Condicionador';
// listaCompras['x'] = 100;

// console.log(listaCompras);

// let listaFrutas = ['Banana', 'Morango'];

// console.log(listaFrutas);

// let listaViagem = Array('Passagens', 'Malas');

// console.log(listaViagem);

//Arrays multidimensionais ou Matriz

// let lista_coisas = Array();

// lista_coisas['Frutas'] = Array();
// lista_coisas['Frutas'][0] = 'Morango';
// lista_coisas['Frutas'][1] = 'Uva';
// lista_coisas['Frutas'][2] = 'Laranja';
// lista_coisas['Frutas'][3] = 'Bergamota';
// //lista_coisas[0][0] = 'Morango';

// lista_coisas['Viagem'] = Array();
// lista_coisas['Viagem'][0] = 'Passagens';
// lista_coisas['Viagem'][1] = 'Malas';

// console.log(lista_coisas);

// //inserção de elementos no final do array
// lista_coisas['Frutas'].push('Banana');

// //inserção de elementos no começo do array
// lista_coisas['Frutas'].unshift('Limão');

// //exclusão de elementos no final do array
// lista_coisas['Frutas'].pop();

// //exclusão de elementos no começo do array
// lista_coisas['Frutas'].shift();

// console.log(lista_coisas);

// let listaProdutos = Array('Computador', 'Caneta', 'Chuteira');

// let aux = listaProdutos.indexOf('Computador');

// if(aux === 1){
//     console.log('Elemento não existe no array');
// } else {
//     console.log('Elemento existe e está na posição ' + aux);
// }

// let listaProdutos = Array('Lousa', 'Caneta', 'Chuteira', 'Garrafa de água');
// console.log(listaProdutos.sort());

// Função
// function calcularAreaTerreno(largura, comprimento) {
//     let area = largura * comprimento;
//     return area;
// }

// let prompt = require('prompt-sync')();

// let lg = prompt("Digite a largura do terreno em metros: ");
// let cp = prompt("Digite o comprimento do terreno em metros: ");

// //Chamada da função e passagem de parâmetros
// let resultado = calcularAreaTerreno(lg, cp);

// console.log('O terreno possui ' + resultado + ' metros quadrados');

// //Global - permite que a variavel seja acessada em qualquer parte do codigo
// let variavelGlobal;
// let x = 5;
// let y = -2;
// //Função - apenas dentro da função.
// function variavelF (var1, var2){
//     let variavelFuncao = var1 + var2 //Função
//     return variavelFuncao;
// }
// variavelGlobal = variavelF(x,y); //Global
// //Bloco - variaveis dentro de blocos como if, for, while...
// if (variavelGlobal > 0){
//     let maior = true //Bloco
//     if (maior){
//         console.log('OK')
//     }
// }

//Função anônima -> não tem nome; usada em funções de callback
// let exibirFuncao = function() { // wraper -> envelopando a função na variável
//     console.log('Olá');
// }

// exibirFuncao();

//Funções de callback -> podem ser passadas como parâmetro para outras funções
// function exibirFuncao(callbackSucesso, callbackErro) {
//     if(true) {
//         callbackSucesso('Funções de callback em caso de sucesso');
//     } else {
//         callbackErro('Função de callback em caso de erro');
//     }
// }

// let callbackSucesso = function(titulo) {
//     console.log(titulo);
// }

// let callbackErro = function(erro) {
//     console.log(erro);
// }

// exibirFuncao(callbackSucesso, callbackErro);

// let soma = function (num1, num2) {
//     return num1 + num2;
// }

// let subtracao = function (num1, num2) {
//     return num1 - num2;
// }

// let multiplicacao = function (num1, num2) {
//     return num1 * num2;
// }

// let divisao = function (num1, num2) {
//     return num1 / num2;
// }

// function calculadora(operacao, num1, num2, soma, subtracao, multiplicacao, divisao){
//     switch (operacao){
//         case 'soma':
//             let resultado = soma(num1, num2);
//             return resultado;
//             break;
//         case 'subtracao':
//             resultado = subtracao(num1, num2);
//             return resultado;
//             break;
//         case 'multiplicacao':
//             resultado = multiplicacao(num1, num2);
//             return resultado;
//             break;
//         case 'divisao':
//             resultado = divisao(num1, num2);
//             return resultado;
//             break;
//     }
// }

// console.log(calculadora('divisao', 10, 10, divisao));

let calculadora = ((num1, num2) => {
    return num1 + num2;
});
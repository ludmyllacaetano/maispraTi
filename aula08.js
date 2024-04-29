//Exercitando Arrays e funções 

//Exercício 1: Somar todos os elementos de um array

let elementos = [1, 2, 3, 4];

function somaElementos(vetor) {
    let soma = 0;
    for(let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}

//console.log("A soma dos elementos é: ", somaElementos(elementos));

//Exercício 2: Encontrar o maior número em um Array

let lista = [5, 1, 15, 2, -78, 0, 3];

function maiorNumero(vetor) {
    let maior;
    // let maior = vetor[0]
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > maior || maior == undefined) {
            maior = vetor[i];
        }
    }
    return maior;
}

//console.log("O maior elemento é: ", maiorNumero(elementos));

function acharMaiorComMax(vetor) {
    return Math.max(...vetor);
}

//console.log("O maior elemento é: ", acharMaiorComMax(elementos));

//Exercício 3: Reverter um array

function reverterArray(vetor) {
    let arrayReverso = Array();
    let j = 0;
    for (let i = (vetor.length -1); i >= 0; i--) {
        arrayReverso[j] = vetor[i];
        j++;
    }
    return arrayReverso;
}

//console.log("O array reverso é: ", reverterArray(elementos));

// Exercício 4: Somar todos os elementos da matriz
let matrizElementos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function somarMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

//console.log("A soma da matriz é: ", somarMatriz(matrizElementos));

//Exercício 5: Encontra o maior número em uma matriz

function maiorNumeroMatriz(matriz) {
    let maior;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] > maior || maior == undefined) {
                maior = matriz[i][j];
            }
        }
    }
    return maior;
}

//console.log("O maior número da matriz é: ", maiorNumeroMatriz(matrizElementos));

//Funções Avançadas: String

/*
    String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objtos, possuindo propriedades e métodos.
*/

// let nome = 'Dick Vigarista';
// console.log(nome);
// let nomeAlterado = nome.replace('Dick Vigarista', 'Pica Pau');
// //console.log(nome.replace('Dick Vigarista', 'Pica Pau'));
// console.log(nomeAlterado);

// let outroNome = ' BATMAN ';
// console.log('-' + outroNome.trim() + '-')

//Funções Avançadas: Matemáticas

//let x = Math.ceil(10.100); //arredonda para cima
//let x = Math.floor(10.100); //arredonda para baixo
// let x = Math.random(); //gera um número aleatório
// console.log(x);

//Funções Avançadas: Datas

let data = new Date();
//let data = new Date().toLocaleDateString('pt-BR');
//console.log(data);
// console.log(data.getDate());
// console.log(data.getMonth() + 1);
// console.log(data.getFullYear());

console.log(`Hoje é ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);

//console.log(data.toLocaleDateString());

console.log(data.toString());
console.log(data.toString('yyyy-MM-dd'));

//data.setDate(data.getDate() + 720);
//data.setMonth(data.getFullYear() + 5);
//console.log(d)
console.log(data.getTime());

let data1 = new Date();

let milisegundosEntreDatas = Math.abs(data.getTime() - data1.getTime());

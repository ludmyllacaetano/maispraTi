// objeto; classe

// const pessoa = {
//     name: 'Lucas',
//     idade: 18,
//     email: 'lucas@teste.com',
//     profissao: 'Músico',
//     empregada: true
// }

// pessoa.nome = "Jurema";

// //console.log(pessoa.nome);
// //console.log(pessoa['nome']);

// pessoa.falar = function() {
//     return `Meu nome é ${this.nome} tenho ${this.idade} anos de idade e sou ${this.profissao}`
// }

// console.log(pessoa);

// for (let chave in pessoa) {
//     console.log(chave + ": " + pessoa[chave]);
// }

//Exercício: objeto em casa
// const boneco = {
//     nome: 'Baymax',
//     profissao: 'Assistente pessoal de saúde',
//     referencia: 'Big Hero 6',
//     criador: 'Tadashi Hamada',
//     formato: 'fofinho e acolhedor',
//     status: 'vivo'
// }

// boneco.perguntar = function() {
//     return 'Em uma escala de 1 à 10, qual o nível da sua dor?'
// }

// console.log(boneco.perguntar());

// let numeros = [10, 20, 100];

// for (let numero of numeros) {
//     console.log(numero);
// }

/*
    Você tem uma lista de objetos que representam diferentes tipos de veículos e suas características. Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veículo. Depois, utilizar o FOR OF pa listar apenas os modelos dos veículos.
*/

// const veiculo01 = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2022,
//     cor: "Prata",
//     motor: "2.0L",
//     preco: 60000
// };

// const veiculo02 = {
//     marca: "Honda",
//     modelo: "Civic",
//     ano: 2023,
//     cor: "Preto",
//     motor: "1.5L",
//     preco: 55000
// };

// const veiculo03 = {
//     marca: "Ford",
//     modelo: "Fusion",
//     ano: 2021,
//     cor: "Branco",
//     motor: "2.5L",
//     preco: 62000
// };

// let veiculos = [veiculo01, veiculo02, veiculo03]

// for (let veiculo in veiculos) {
//     console.log(veiculos[veiculo]);
// }

// for (let carro of veiculos) {
//     console.log(carro.modelo);
// }

//forEach

// let cores = ['Azul', 'Preto', 'Branco'];

// cores.forEach((cor, indice) => {
//     console.log(indice + ": " + cor);
// })l

// let compras = []
// compras['frutas'] = new Array('banana', 'laranja');

// compras[i].forEach((value, index) => {
//     console.log(index + ": " value);
// })

/*
    Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.
*/

// let numeros = new Array(5, 7, 14, 21);
// let soma = 0;
// let dobroNumeros = new Array();

// numeros.forEach((numero, indice) => {
//     soma += numero;
//     dobroNumeros[indice] = numero*2;
//     //console.log(numero*2);
//     if(indice == numeros.length -1){
//         console.log("Soma: ",soma);
//         console.log("Array*2: ", dobroNumeros);
//     }
// })

//ES6: ECMAScript
// let nome = 'Jaques';
// let idade = 24;
// let sexo = 'Masculino';

// let objeto = {
//     nome,
//     idade,
//     sexo
// }

// console.log(objeto);

//Design pattern -> construção de objetos em massa
let BicicletaFactory = function(identificadorUnico, cor, tipo, marca) {
    return {
        identificadorUnico,
        cor,
        tipo,
        marca
    }
}

//let cor = prompt("Escreva a cor");

let bicicleta1 = BicicletaFactory(1, 'Azul', 'Speed', 'Caloi');
let bicicleta2 = BicicletaFactory(2, 'Preta', 'Mountain', 'BMX');

console.log(bicicleta1);
console.log(bicicleta2);
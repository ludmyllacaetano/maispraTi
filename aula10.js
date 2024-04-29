//Exercício 1
// const professor = {
//     nome: "Tony Stark",
//     materia: "Matemática",
//     notas: {
//         aluno1: 3.5,
//         aluno2: 4.0,
//         aluno3: 2.8
//     }
// }

// /* For in para iterar sobre as propriedades dentro das notas, calcule a média e imprima se a turma está acima ou não da média */

// let soma = 0;
// let numeroAlunos = 0;

// for (let aluno in professor.notas){
//     soma += professor.notas[aluno];
//     numeroAlunos++;
// } 

// let media;

// media = soma/numeroAlunos

// console.log("Média da turma: ", media.toFixed(2));
// if(media >= 3.0){
//     console.log("A turma está acima da média");
// } else {
//     console.log("A turma está abaixo da média");
// }
//console.log(media >= 3 ? `A turma está acima da média.` : `A turma está abaixo da média.`)

//Exercício 2

// const biblioteca = [
//     { titulo: "12 Regras para a Vida", autor: 'Jordan Peterson', ano: 1925 },
//     { titulo: "O Hobbit", autor: 'J.R.R. Tolkien', ano: 1937 },
//     { titulo: "Senhora do Jogo", autor: 'Sidney Sheldon', ano: 2009 },
//     { titulo: "Zé Carioca", autor: 'Disney', ano: 1940 },
//     { titulo: "Nação Dopamina", autor: 'Anna Lembke', ano: 2021 },
// ]

/*
* For of para iterar sobre o array biblioteca
* Para cada livro, verifique se foi publicado antes de 2000
* Imprimir o titulo e o ano dos livros que atendem essa condição
*/

// for (let livro of biblioteca){
//     if(livro.ano < 2000) {
//         console.log(`O livro "${livro.titulo}", escrito por ${livro.autor}, foi publicado em ${livro.ano}.`);
//     }
// }

//Exercício 3

const filmes = [
    { titulo: 'Tropa de Elite', genero: 'Ação' },
    { titulo: 'Capitão Fantástico', genero: 'Drama' },
    { titulo: 'O Poderoso Chefão', genero: 'Crime' },
    { titulo: 'Clube da Luta', genero: 'Drama' },
    { titulo: 'Oppenheimer', genero: 'Biografia' },
    { titulo: 'High School Musical', genero: 'Musical' },
    { titulo: 'Barbie', genero: 'Live Action' },
]

/*
* Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero.
* Para cada filme no array, verifique se o gênero já existe no objeto contagem.
* Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1
* Após loop, imprima cada gênero e o número de filmes correspondente.
*/

// let contagemGeneros = {}

// filmes.forEach(filme => {
//     if(contagemGeneros[filme.genero]) {
//         contagemGeneros[filme.genero]++;
//     } else {
//         contagemGeneros[filme.genero] = 1;
//     }
// })

// for (let genero in contagemGeneros) {
//     console.log(`Existem ${contagemGeneros[genero]} filme(s) do gênero ${genero}.`);
// }

/*Pesquisa Binária

Desenvolvam um algoritmo que seja capaz de receber uma lista, e um valor correto. E execute uma pesquisa binária para encontrar o valor certo.

*/
// const binarySearch = (list, item) => {
//     let low = 0;
//     let high = list.length - 1;

//     while(low <= high) {
//         const mid = Math.floor((low + high)/2);
//         const guess = list[mid];

//         if(guess === item) {
//             return mid;
//         } else if (guess > item) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return null;
// }

// const test1 = [1, 5, 9, 15, 20]
// console.log(binarySearch(test1, 20));

/*
    spread = espalhar
    rest = juntar
*/

// let tituloArtigo = "Movimento ágil";

// console.log(...tituloArtigo);
// console.log([...tituloArtigo]);

// let listaTimes = ['Grêmio', 'Football Porto Alegrense', 'ULBRA Canoas'];
// let listaTimes2 = ['São José', 'Pelotas'];

// let listaTimesCompletos = ['Flamengo', 'São Paulo', ... listaTimes, ... listaTimes2];

// console.log(listaTimesCompletos);

// let pessoa = { nome: 'Pedro', idade: 15 }
// let dadosCompletos = { endereco: 'Rua de teste', ... pessoa }
// console.log(dadosCompletos);

function soma (... param) {
    let resultado = 0;

    console.log(param);
    
    param.forEach(v => resultado += v);
    
    return resultado;
}

console.log(soma(3, 8, 5, 7))

function multiplicacao(m, ... p){
    console.log(m);
    console.log(p);

    let resultado = 0;

    p.forEach(elemento => resultado += m * elemento);

    return resultado;
}

console.log(multiplicacao(5, 7, 12, 3, 50));
// let a = 'A';
// let b = 'B';
// let c = 'C';

// // atribuição via desestruturação
// // const numeros = [1, 2, 3];
// // [a, b, c] = numeros;

// const letras = ['B', 'C', 'A'];
// [a, b, c] = letras;

// console.log(a, b, c);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero, terceiroNumero);
// console.log(resto);

// const [um, , dois, , tres] = numeros;
// console.log(um, dois, tres);

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// console.log(numeros[1][1]);

const [lista1, lista2, lista3] = numeros;
console.log(lista3);


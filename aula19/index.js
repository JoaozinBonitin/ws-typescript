/**
 * Primitivos -  String, boolean, undefined, null -> valores imutaveis
 * 
*/

// let nome = 'Luiz';
// nome = 'Otávio';
// console.log(nome);

// let a = 'A';
// let b = a; // cópia -> ambas independentes
// console.log(a, b);

// a = 'Outra Coisa';
// console.log(a, b);

// Referencia -> arrays, obejtos e funções -> valores passados por referencia

// let a = [1, 2, 3];
// let b = a; // -> ocupam o mesmo lugar na memória
// let c = b;

// a.push(4)
// console.log(a, b);

// b.pop(0);
// console.log(a, b);

// a.push('Luiz');
// console.log(c);

const a =  {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const b = a;

a.nome = 'João';
console.log(a);
console.log(b);

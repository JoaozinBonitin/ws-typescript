const frutas = ['Pera', 'Maçã', 'Uva']; // vetor -> array de uma unica dimensão

// for (let index = 0; index < frutas.length; index++) {
//     console.log(frutas[index]);   
// }

// for in le os indices ou chave do objeto
// for (let i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves]);
}
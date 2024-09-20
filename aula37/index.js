const nome = 'Luiz Otávio'; // Strings são iteraveis

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

// for of não mostra o indice, mostra os valores

// for (let valor of nome) {
//     console.log (valor);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

for (let chave in pessoa) {
    console.log(chave);
}

// For clássico - Geralmente com interáveis (arrays ou Strings)
// For in - Retorna o índice ou chave (String, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou Strings)
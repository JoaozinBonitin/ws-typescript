const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

// const nome = pessoa.nome;

const { nome, sobrenome } = pessoa;

console.log(nome);

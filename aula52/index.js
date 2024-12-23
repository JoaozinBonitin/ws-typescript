const nome = 'Luiz';

function falaNome() {
    console.log(nome); // escopo lexico
}

function usaFalanome() {
    falaNome();
}

usaFalanome()
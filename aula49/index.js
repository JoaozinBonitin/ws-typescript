// Declaração de função (function hoisting)
// falaOi();
function falaOi() {
    console.log('Oie');
}

// Funções são objetos de primeira classe (First-class objects) - pode tratar as funções como um dado
// muito poderoso -> possibilidade de usar a constante como parametro, e executar uma função dentro de outra função
const souUmDado = function() {
    console.log('Sou um dado.');
}
souUmDado();

// function executaFuncao (funcao) {
//     funcao();
// }
// executaFuncao (souUmDado);

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um Objeto 

const obj = {
    falar: function() {
        console.log('Estou falando');
    }
}

obj.falar();
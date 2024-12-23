// return 
// Retorna um valor
// Termina a função

// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(5, 2));

// function soma2(a, b){
//     console.log(a + b);
// }

// document.addEventListener('click', function () {
//     this.body.style.backgroundColor = 'red';
// });

// function falaFrase(comeco) {
//     function FalaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return FalaResto;
// }

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));

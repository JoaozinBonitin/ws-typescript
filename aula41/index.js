// Escreva uma função que recebe 2 números e retorne o maior deles

// function getMaiorNumero(num1, num2){
//     if(num1 > num2){
//         console.log("o Número 1 é maior que o Número 2");
//     } else if (num1 === num2) {
//         console.log("Os dois Números são iguais");
//     } else {
//         console.log("O Número 2 é maios que o Número 1");
//     }
// }

// getMaiorNumero(6,7);

function max(x, y){
    return x > y ? x : y;
}

console.log(max(10, 2));

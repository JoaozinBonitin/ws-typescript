const numero = 10;

// if(numero >= 0 ) {
//  console.log("Sim, o número é maior ou igual a zero.");
// }

// if(numero >= 0 && numero <= 5) {
//     console.log("o numero está entre 0 e 5");
// } else {
//     console.log("O numero NÃO está entre 0 e 5");
// }

// a partir do momeno que if , else if e else, indentificam uma condição verdadeira, ele executa o bloco de código que deu verdadeiro

if(numero >= 0 && numero <= 5) {
    console.log("o numero está entre 0 e 5");
} else if (numero >= 6 && numero <= 8) {
    console.log("O numero está entre 6 e 8");
} else if (numero >= 9 && numero <= 11) {
    console.log("O numeor está entre 9 e 11");
} else {
    console.log("o numero não está entre 0 e 11");
}
const verdadeira = true;

// tem escopo de código
// var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio';
    console.log(nome, nome2);

    if (verdadeira) {
        console.log("OK");
    }
}
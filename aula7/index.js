/*
    Luiz Otávio tem 30 anos, pesa 84 kg 
    tem 1.8 de altura e seu IMC é de 25.925925925924
    Luiz otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm =1.80;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);

// template string - para colocar variaveis em strings

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`); // jeito mais atual, para colocar variaveis em Strings
console.log(nome, 'nasceu em', anoNascimento, '.');





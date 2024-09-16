// tipos primitios em js - String, number, null, boolean, symbol

const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String

const num1 = 10; // number
const num2 = 10; // number

let nomeAluno; // undefined = não aponta para local nenhum na memória
let sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memória, não é a mesma coisa que undefined

const boolean = true; // boolean, só pode ser true ou false (valor lógico)//  serve para fazer devios condicionais
const aprovado = true;

console.log(typeof nome, nome) // visualizar o tipo e o valor

const a = [1, 2];
const b = a;

console.log(a, b);

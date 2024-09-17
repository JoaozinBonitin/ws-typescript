// let num1 = 10.5789551255547; // number
// let num2 = 2.5; // number

//console.log(num1.toString() + num2); -> alterou para o tipo String temporariamente
// num1 = num1.toString() -> alterou para o tipo String permanetemente 

//console.log(num1.toFixed(2)); // -> arredonda até duas casas decimais

// console.log(Number.isInteger(num1));

// let temp= num1 * 'Ola';
// console.log(Number.isNaN(temp));
// saber quando ocorre um caso NaN

let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2));

console.log(num1);



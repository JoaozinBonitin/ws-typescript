let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let aux;

// aux = varA; // A
// varA = varB; // B
// varB = varC // c
// varC = aux; // A

// outra possivel solução para o problema
[varA, varB, varC] = [varB, varC, varA];


console.log(`varA: ${varA}`);
console.log(`varB: ${varB}`);
console.log(`varC: ${varC}`);

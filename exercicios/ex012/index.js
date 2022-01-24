/* exercício*/

let varA = 'A'; // =B
let varB = 'B'; // =C
let varC = 'C'; // =A

/* modo 1*/
let varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;
console.log( varA, varB, varC);

/*modo 2*/

[varA, varB, varC] = [varB, varC, varA];
console.log( varA, varB, varC);
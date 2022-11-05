let varA = 'A';
let varB = 'B';
let varC = 'C';

/*
Solução Antiga:

const recebeVarA = varA
varA = varB
varB = varC
varC = recebeVarA
console.log(varA, varB, varC)*/

//Solução Nova:

[varA, varB, varC] = [varB, varC , varA];
console.log(varA, varB, varC);
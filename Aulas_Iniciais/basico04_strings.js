/* A barra invertida '\' é utilizada no meio do texto
como um 'escape' para poder colocar alguns caracteres
especiais, por exemplo aspas duplas*/

/** As Strings  são indexadas 
 * ex.:
 * 01234567
 * Um texto
*/

let exString1 = ("Um texto com aspas \"duplas\"");
let exString2 = console.log("Um texto com barra \\invertida");
let exString3 = ('O rato roeu a roupa do rei de roma')
// Mostra o elemento da posição n:
console.log(exString1[5])

// Mostra o elemento da posição n:
console.log(exString1.charAt(7))

// Concatena strings:
console.log(exString1.concat(' ', 'em', ' ', 'teste com a função concat'))

// Template String:
console.log(`${exString1} em teste com template string`)

// Procura o começo de uma String, o texto precisa ser exatamente igual para retornar true:
console.log(exString1.indexOf('texto'))

// Procura uma String especificada entre aspas simples pelo valor do indice:
console.log(exString1.indexOf('o', 4))

// Procura uma String especificada entre aspas simples, começando do final da string, ou da posição especificada:
console.log(exString1.lastIndexOf('o'))

// Substitui o texto com flag
console.log(exString3.replace(/r/g, '#'))

// Verificar o tamanho da String
console.log(exString3.length)

// Pegar uma "parte" da String
console.log(exString3.slice(2,6))

// Colocar toda a String em MAIUSCULO
console.log(exString3.toUpperCase())

// Colocar toda a String em minusculo
console.log(exString3.toLowerCase())
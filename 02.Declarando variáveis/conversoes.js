//Conversão implícita
const numero = 456;
const numeroString = "456";

//console.log(numero === numeroString); //False, comparou o valor da variável e o seu tipo.
//console.log(numero == numeroString); //True, comparou valor da variável.
//console.log(numero + numeroString); //Concatenação, 'juntou' uma string com um number.

//Conversão explícita
//Number() - Irá converter o valor da várial para numero, antes da operação matemática.
//String()

const numeroCaractere = "456a";

console.log(numero + Number(numeroString)); //912
console.log(numero + Number(numeroCaractere)); //NaN - se o valor da variável estiver descriminado numero e caractere, no momento da conversão o JavaScript não conseguira realizar a operação matemática, retornando como resposta NaN.

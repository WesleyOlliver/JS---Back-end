//Conversão implícita
//const numero = 456;
//const numeroString = "456";

//console.log(numero === numeroString); //False, comparou o valor da variável e o seu tipo.
//console.log(numero == numeroString); //True, comparou valor da variável.
//console.log(numero + numeroString); //Concatenação, 'juntou' uma string com um number.

//Conversão explícita
//String() - Irá converter o valor da várial para string, permitindo realizar a concatenação.

let telefone1 = 12341234;
console.log("O telefone é " + String(telefone1));

let telefone2 = 43214321;
console.log("O telefone é " + telefone2.toString()); //Outra maneira de realizar a conversão de variável.

let usuarioConectado1 = false;
console.log(String(usuarioConectado1)); //Conversão da booleana 'false' para uma String.
usuarioConectado1 = true;
console.log(String(usuarioConectado1)); //Conversão da booleana 'true' para String.

//Number() - Irá converter o valor da várial para numero, antes da operação matemática.

//const numeroCaractere = "456a";

//console.log(numero + Number(numeroString)); //912
//console.log(numero + Number(numeroCaractere)); //NaN - se o valor da variável estiver descriminado numero e caractere, no momento da conversão o JavaScript não conseguira realizar a operação matemática, retornando como resposta NaN (Not a Number, não é número).

//Calculando a área de um retângulo.

let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura));
console.log( + largura * + altura); //Também é possível realizar a conversão quando adicionarmos o sinal de soma "+" antes das variáveis.

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); //Conversão da booleana 'false' para um Number, retorando como resposta o número "0".
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); //Conversão da booleana 'true' para um Number, retornando como resposta o número "1".

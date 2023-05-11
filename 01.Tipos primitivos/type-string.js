//Aula - Tipo de palavras

//Devido a abragência que temos em nosso mundo, possuindo diversos idiomas e línguas nativas foi adotado o formato Unicode (UTF ou "formato de conversão de unicode", em tradução livre), tendo como responsabilidade "cifrar" e "decifrar" caracteres de varios idiomas como também símbolos matemáticos (inclusive emojs).

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

//JavaScript consegue diferenciar caracteres minúsculas de maiúsculas, tanto nos valores dos dados quantos no código que escrevemos.

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

console.log(cidade1 === input1); //se compararmos as duas palavras se são iguais, temos como respota = false

//Mas se explorarmos e usar um dos métodos de string nativos do JavaScript podemos obter como resposta caracteres "iguais".

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase(); //toLowerCase() converte todos os caracteres de string informado em minúsculas.

console.log(cidade2 === inputMinusculo); //se compararmos as duas palavras se são iguais, temos como respota = true

//Quando queremos saber quantos caracteres um string possui, podemos usar a propriedade length que nos dará como retorno a quantidade de caracteres da string chamada.

const senha = "minhaSenha123";

console.log(senha.length); //13 caracteres

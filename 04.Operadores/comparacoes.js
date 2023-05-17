// == compara apenas o valor da variável - comparação implícita

const numero = 5;
const palavra = "5";

//console.log(numero == palavra);

// === compara o valor e o tipo de dado da variável - comparação implícita

//console.log(numero === palavra);

// typeof nos dara como informação qual é o tipo do valor da variável "chamada".

//console.log(typeof numero);
//console.log(typeof palavra);

// comparação explícita

Number()
String()

// Praticando os operadores

const a = [];
const b = 20;
const c = true;
const d = '';

//if (b === 20 && c != false && d == 0) {
//    console.log ('Verdadeiro.');
//} else {
//    console.log('Falso.');
//}

console.log(b === 20 && c != false && d == 0 ? 'Verdadeiro.' : 'Falso.'); // Verdadeiro.

//if (a == 0) {
//    console.log('Verdadeiro.');
//} else {
//    console.log('Falso.');
//}

console.log(a == 0 ? 'Verdadeiro.' : 'Falso.'); // Verdadeiro.

//if (d) {
//    console.log('Verdadeiro.');
//} else {
//    console.log('Falso.');
//}

console.log(d ? 'Verdadeiro.' : 'Falso.'); // Falso.

//if (b == '20') {
//    console.log('Verdadeiro.');
//} else {
//    console.log('Falso.');
//}

console.log(b == '20' ? 'Verdadeiro.' : 'Falso.'); // Verdadeiro.

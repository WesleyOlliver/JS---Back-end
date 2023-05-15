//var - muito volátil, mas imprópria para o uso nos dias de hoje (sujeito a muitos bugs).

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area);
//var area;

//let - podemos reatribuir valores a variável, aceitando mudanças no mesmo.

//let forma = 'retângulo';
//let altura = 5;
//let comprimento = 7;
//let area

//if (forma === 'retângulo') {
//    area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area);

//const - uma vez descriminado um valor a ela, não se é mais possível realizar alterações.

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

//Variáveis e a resposta de tudo

var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

{
    var respostaDeTudo = 3.14;
    let idade = 42;
    const pi = 29;
    console.log(respostaDeTudo, idade, pi); //3.14, 42, 29
}
console.log(respostaDeTudo, idade, pi);//3.14, 29, 3.14

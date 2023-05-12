// booleanos nos retornam como resposta o true (verdadeiro) e false (falso), mas no JavaScript temos alguns valores que podem se comprtar como se fossem booleans.

//Esses valores são 'reconhecidos' como truthy (true/verdadeiro) ou falsy (false/falso). Ex:

// 0 => false
// "" => false
// 1 => true

//console.log(0 == false);
//console.log("" == false);
//console.log(1 == true);

//Temos outras duas situações que abordam o undefined e null

//Undefined - quando criamos uma variável mas não atribuimos a ela um valor

let minhaVar;

console.log(minhaVar);
console.log(typeof minhaVar);

//Null - este é um caso especial, pois no JavaScript pode nos retornar duas situações:
//1 Valor que representa vazio ou nada (quando atribuida a uma variável).
//2 Possui como propriedade 'objeto' (null foi criado como objeto no JavaScript).

let varNull = null;

console.log(varNull);
console.log(typeof varNull);

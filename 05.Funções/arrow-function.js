console.log(apresentar("Wesley"));                // Meu nome é Wesley.

function apresentar(nome) {
    return `Meu nome é ${nome}.`;
}

// Arrow function: este é o terceiro método para criar uma função no JavaScript (muito usado na geração de "objetos"), tendo os mesmo principios basicos da "expressão de função", onde ela fica compacta no código (usando menos linhas), não possui uma nome para a declaração e hoistingh (por se tratar de uma variável).

// Para criarmos esse novo método devemos atribuir a flecha (=>) após o identificador da constante, em seguidas os parâmetros da função.
const apresentarArrow = nome => `Meu nome é ${nome}.`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow("Wesley"));          // => Meu nome é Wesley.
console.log(soma(5, 9));                         // => 5 + 9 = 14

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'Somente números de 0 a 9.';
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(15, 8));         // => Somente números de 0 a 9.
console.log(somaNumerosPequenos(6, 3));          // => 6 + 3 = 9

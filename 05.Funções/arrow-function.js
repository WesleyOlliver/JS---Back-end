console.log(apresentar("Wesley"));

function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow("Wesley"));
console.log(soma(5, 9));

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'Somente números de 0 a 9.';
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(15, 8));
console.log(somaNumerosPequenos(6, 3));

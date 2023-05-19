const nome = "Wesley";
const idade = 2023-1995;
const cidadeDeNascimento = 'Capão Bonito';

//const apresentacao = "Me chamo " + nome + ", no momento tenho " + idade + " anos e nasci na cidade de " + cidadeDeNascimento + ".";

//console.log(apresentacao);

// Template de String => ${}

const apresentacao = `Me chamo ${nome}, no momento tenho ${idade} anos e nasci na cidade de ${cidadeDeNascimento}.`;

console.log(apresentacao);

const cliente = "Leo";
const anos = 2023-2000;
const bebidaMaior = "cerveja!";
const bebidaMenor = "suco!";
const pedido = `${cliente} diz: 'por favor, quero beber ${anos >= 18 ? bebidaMaior : bebidaMenor}'`;

console.log(pedido);

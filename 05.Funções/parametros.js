// Parâmetros de função tem como responsábilidade passar as informações necessárias para que a função possa ser executada corretamente, ou seja, ela informa os valores que seram usados na execução da função, os valores são descriminados entre os () no momento da execução da função.
function soma(num1, num2) {                        // num1 => 4 : num2 => 6
    return num1 + num2;
}

console.log(soma(4, 6));                           // => 4 + 6 = 10

// No momento da declaração dos valores das variáveis que estam sendo vinculadas nos parâmetros temos que ter em mente que eles possuem uma ordem, ou seja, ela irá vincular o valor no parâmetro conforme a ordem que discriminamos o mesmo.
function nomeIdade(nome, idade) {
    return `Me chamo ${nome} e tenho a idade de ${idade} anos.`;
}

console.log(nomeIdade(27, "Wesley"));              // => `Me chamo 27 e tenho a idade de Wesley anos.`
console.log(nomeIdade("Wesley", 27));              // => `Me chamo Wesley e tenho a idade de 27 anos.`

// Podemos chamar mais de uma função na hora da execução e como funções são blocos fechados podemos repetir os nomes das varáveis no corpo de várias funções, mas se atentado que os nomes das funções durante a criação do programa deve ser exclusivo, cada um tendo o seu.
function multiplica(num1, num2) {                  // num1 => 7 + 6 = 13 : num2 => 8 + 9 = 17
    return num1 * num2;
}

console.log(multiplica(soma(7, 6), soma(8, 9)));   // => 13 * 17 = 221
console.log(multiplica(soma(7, 6)));               // => NaN: retorna como resultado quando em uma operação apenas um parâmetro é descriminado.

// Para evitar o "erro" de NaN, basta igualar a variável a 1 (exemplo: num1 = 1), quando a função for executada e tiver apenas 1 dos parâmetros, ela preenchera os demais que estaram faltando com o valor de 1, para execuatar corretamente a função.

// Função sem retorno e sem parâmetro: nem toda função precisa receber um parâmetro para realizar a sua execução, como abaixo a função recebe uma string fixa.
function cumprimentar() {
    console.log ('Olá pessoal!');
}

cumprimentar();                                    // => Olá pessoal!

// Função sem retorno, com parâmetro: quase igual a função anterior, mas neste momento a função recebe um parâmetro para a execução da mesma.
function cumprimentarPessoa(pessoa) {
    console.log(`Olá, tudo bem com você ${pessoa}?`);
}

cumprimentarPessoa('Jéssica');                     // => `Olá, tudo bem com você Jéssica?`

// Utilizando Parâmetros
function comParametro(param) {
    console.log(param);
}

comParametro();                                    // => undefined: não há nenhum valor/dado relacionado ao parâmetro, dando como retorno undefined.

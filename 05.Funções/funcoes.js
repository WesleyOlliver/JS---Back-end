//let x = "";
//console.log(x);
//x = "oi";

// No JavaScript as linhas de código são executadas sequencialmentem, ou  seja uma após a outra, conforme foram criadas, mas com em muitas linguagens de programação temos necessidade em chamar varáveis nas quais já foram declaradas no incio da execução, nesse momento entra em ação as "funções", uma das maiores companheiras do dia a dia do desenvolvedor, solucionando esta etapa. Sua declaração é composta por duas etapas, sendo elas:

// Declaração da função
function imprimeTexto(texto) {        // function => palavra reservada para declarar a função.
                                      // imprimeTexto() => declaração da nossa função para que possamos usar-la quando chamada.
    console.log(texto);               // texto => dado da nossa função.
};                                    // {} => local de manipulação e entrega do valor do dado   de nossa função.

// Execução da função
imprimeTexto("Olá mundo!");           // Declaração chamando a função para ser executada.

function soma() {
    //const resultado = 2 + 2;        // No corpo pode constar outros códigos e atribuições.
    return 2 + 2;                     // return => ela é uma palavra chave, onde estará atribuindo o valor final na manipulação dentro das {} nos dados da declaração, tendo que ser a última na linha da função.
};

imprimeTexto(soma());                 // => 4: Uma função pode estar chamando e execuntando outra função.

// O prórprio JavaScript possui algumas funções prontas, por exemplo funções matemáticas:
Math.round();                         // Arredonda um número de ponto flutuante para o interio mais próximo.
Math.round(4.3);                      // => 4.
Math.round(3.85);                     // => 4.
Math.round(2.5);                      // => 3: quando o número termina com 0.5 a função arredonda para cima.
Math.ceil();                          // Arredonda para o valor mais alto (teto).
Math.ceil(5.2);                       // => 6.
Math.floor();                         // Arredonda para o valor mais baixo (piso).
Math.floor(5.2);                      // => 5.
Math.trunc();                         // Desconsidera os números decimais, conhecido como truncamento.
Math.trunc(4.3);                      // => 4.
Math.trunc(4.8);                      // => 4.
Math.pow();                           // Realiza a exponenciação de 2 números, quando for simples.
Math.pow(4, 2);                       // => 16.
Math.pow(2.5, 1.5);                   // => 3.952847075210474.
Math.sqrt();                          // Retorna a raiz quadrada de um número.
Math.sqrt(64);                        // => 8.
Math.min();                           // Retorna o menor valor entre os argumentos.
Math.min(0, 150, 30, 20, -8, -200);   // => -200.
Math.max();                           // Retorna o maior valor entre os argumentos.
Math.max(0, 150, 30, 20, -8, -200);   // => 150.
Math.random();                        // Irá retornar um valor aleatório (randômico) entre 0 e 1, onde não teremos um valor esperado como resposta.

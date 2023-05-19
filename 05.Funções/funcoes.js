//let x = "";
//console.log(x);
//x = "oi";

// No JavaScript as linhas de código são executadas sequencialmentem, ou  seja uma após a outra, conforme foram criadas, mas com em muitas linguagens de programação temos necessidade em chamar varáveis nas quais já foram declaradas no incio da execução, nesse momento entra em ação as "funções", uma das maiores companheiras do dia a dia do desenvolvedor, solucionando esta etapa. Sua declaração é composta por duas etapas, sendo elas:

// Declaração da função
function imprimeTexto(texto) {     // function => palavra reservada para declarar a função.
                                   // imprimeTexto() => declaração da nossa função para que possamos usar-la quando chamada.
    console.log(texto);            // texto => dado da nossa função.
};                                 // {} => local de manipulação e entrega do valor do dado   de nossa função.

// Execução da função
imprimeTexto("Olá mundo!");        // Declaração chamando a função para ser executada.

function soma() {
    //const resultado = 2 + 2;     // No corpo pode constar outros códigos e atribuições.
    return 2 + 2;                  // return => ela é uma palavra chave, onde estará atribuindo o valor final na manipulação dentro das {} nos dados da declaração, tendo que ser a última na linha da função.
};

imprimeTexto(soma());              // Uma função pode estar chamando e execuntando outra função.

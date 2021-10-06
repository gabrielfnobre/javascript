//IF.. ELSE.. IF:
//A estrutura if.. else.. if.. confere se uma condição foi satisfeita, caso a condição seja satisfeita ela executa o laço do if, caso não, ela entra no laço else if trazendo uma nova opção para ser comparada, e podemos criar vários else if encadeados um atrás do outro, e no final, se nenhum else if for atendido, nós executamos o que estiver detro do laço else...

//EXEMPLO DE USO DE ESTRUTURA ENCADEADA:
function diaDaSemana(dia) {
    if (dia == 1){
        console.log(`1) Hoje é domingo, pois é o ${dia}º da semana!`);
    } else if (dia == 2) {
        console.log(`1) Hoje é segunda, pois é o ${dia}º da semana!`);
    } else if (dia == 3) {
        console.log(`1) Hoje é terça, pois é o ${dia}º da semana!`);
    } else if (dia == 4) {
        console.log(`1) Hoje é quarta, pois é o ${dia}º da semana!`);
    } else if (dia == 5) {
        console.log(`1) Hoje é quinta, pois é o ${dia}º da semana!`);
    } else if (dia == 6) {
        console.log(`1) Hoje é sexta, pois é o ${dia}º da semana!`);
    } else if (dia == 7) {
        console.log(`1) Hoje é sábado, pois é o ${dia}º da semana!`);
    } else {
        console.log('1) Dia inválido');
    }
}
diaDaSemana(1);
diaDaSemana(2);
diaDaSemana(3);
diaDaSemana(4);
diaDaSemana(5);
diaDaSemana(6);
diaDaSemana(7);
diaDaSemana(8);



//USANDO ESTRUTURAS DE CONTROLE COM AUXÍLIO DE FUNÇÃO QUE FILTRA SE UM DETERMINADO VALOR É NUMÉRICO:
Number.prototype.entre = function (inicio, fim) { //Criamos uma função para comparar se um número está entre um valor inicial e um valor final, se estiver ela retorna "true", se não estiver ela retorna "false", perceba que a função está dentro de uma variável que primeiro compara se o valor passado sobre ela corresponde a umvalor do tipo numérico.
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) { //Perceba que já passamos os valores para a função, que, caso retorne true, nos imprimirá o resultado logo abaixo do bloco de controle...
        console.log('2) Quadro de Honra');
    } else if (nota.entre(7, 8.99)){
        console.log('2) Aprovado');
    } else if (nota.entre(4, 6.99)){
        console.log('2) Recuperação');
    } else if (nota.entre(0, 3.99)){
        console.log('2) Reprovado');
    } else {
        console.log('2) Nota Inválida');
    }
}
console.log('\n');
imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.99);
imprimirResultado(-1);
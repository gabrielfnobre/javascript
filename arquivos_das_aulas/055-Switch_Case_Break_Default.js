//SWITCH.. CASE.. BREAK.. DEFAULT:
//O switch.. case.. break.. é a estrutura de controle perfeita para quando desejamos ter uma estrutura de controle onde temos vários casos diferentes dependendo do valor atribuído...

//EXEMPLO DE SWITCH:
function diaDaSemana(dia) {
    switch (dia) {
        case 1: //Em todos os case ou default, não podemos colocar estruturas condicionais, o case aceita somente um valor específico...
            console.log(`1) Hoje é domingo, pois é o ${dia}º dia da semana`);
            break; //O break faz o programa pular para fora...
        case 2:
            console.log(`1) Hoje é segunda, pois é o ${dia}º dia da semana`);
            break;
        case 3:
            console.log(`1) Hoje é terça, pois é o ${dia}º dia da semana`);
            break;
        case 4:
            console.log(`1) Hoje é quarta, pois é o ${dia}º dia da semana`);
            break;
        case 5:
            console.log(`1) Hoje é quinta, pois é o ${dia}º dia da semana`);
            break;
        case 6:
            console.log(`1) Hoje é sexta, pois é o ${dia}º dia da semana`);
            break;
        case 7:
            console.log(`1) Hoje é sábado, pois é o ${dia}º dia da semana`);
            break;
        default: //Sempre devemos ter um valor padrão para o switch...
            console.log(`1) O Valor ${dia} é inválido, utilize valores de 1 a 7`);
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
let queDiaEh = dia => {
    
    let resultado;
    
    switch(dia) {
        case 1:
            resultado = `Hoje é Domingo, Fim de Semana, pois é o ${dia}º da semana.`
            break;
        case 2:
            resultado = `Hoje é Segunda, Dia Útil, pois é o ${dia}º da semana.`
            break;
        case 3:
            resultado = `Hoje é Terça, Dia Útil, pois é o ${dia}º da semana.`
            break;
        case 4:
            resultado = `Hoje é Quarta, Dia Útil, pois é o ${dia}º da semana.`
            break;
        case 5:
            resultado = `Hoje é Quinta, Dia Útil, pois é o ${dia}º da semana.`
            break;
        case 6:
            resultado = `Hoje é Sexta, Dia Útil, pois é o ${dia}º da semana.`
            break;
        case 7:
            resultado = `Hoje é Sábado, Fim de Semana, pois é o ${dia}º da semana.`
            break;
        default:
            resultado = `Número de dia inválido, tente somente números de 1 a 7.`
    }

    return console.log(resultado);
}

queDiaEh(0);
queDiaEh(1);
queDiaEh(2);
queDiaEh(3);
queDiaEh(4);
queDiaEh(5);
queDiaEh(6);
queDiaEh(7);
queDiaEh(8);
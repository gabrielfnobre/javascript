let jogos = [10, 20, 20, 8, 25, 3, 0, 30, 1];

function desempenho(jogos) {
    let recorde = 0;
    let jogoRuim = jogos[0];
    let piorJogo = 0;

    for(let i = 0; i < jogos.length; i++){
        if (jogos[i + 1] > jogos[i]){
            recorde++;
        }
    }
    
    for(let i = 0; i < jogos.length; i++){
        if (jogoRuim > jogos[i]){
            jogoRuim= jogos[i];
            piorJogo = i + 1;
        }
    }

    return console.log(recorde, piorJogo)
}

desempenho(jogos)
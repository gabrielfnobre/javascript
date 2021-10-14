const contInterval = vetor => {
    let dentro = [];
    let fora = [];

    for(let i = 0; i <= vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            dentro.push(vetor[i]);
        } else if (vetor[i] < 10 || vetor[i] > 20){
            fora.push(vetor[i]);
        }
    }

    return console.log(`No vetor que foi passado temos:\n${dentro.length} entre o intervalor de 10 a 20, que são: ${dentro}\n${fora.length} fora do intervalo entre 10 e 20, que são: ${fora}`)
}

let vetor = [21, 34, 10, 20, 18, 11, 2, 45];

contInterval(vetor)
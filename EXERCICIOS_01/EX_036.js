const multiplicaPor = (vetor, fator) => {
    let vetorMultiplicado = []
    for(let i = 0; i < vetor.length; i++){
        vetorMultiplicado[i] = vetor[i] * fator
    }

    return console.log(vetorMultiplicado)
}

const multiplicaPorMaioresQue5 = (vetor, fator) => {
    let vetorMultiplicado = []
    if (fator > 5) {
        for(let i = 0; i < vetor.length; i++){
            vetorMultiplicado[i] = vetor[i] * fator
        }
    } else {
        vetorMultiplicado = 'O número passado como fator da multiplicação é menor que 5...'
    }

    return console.log(vetorMultiplicado)
}

let vetor = [1, 2, 3, 4, 5]

multiplicaPor(vetor, 5)
multiplicaPorMaioresQue5(vetor, 5)
multiplicaPorMaioresQue5(vetor, 10)
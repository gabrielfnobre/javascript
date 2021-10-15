let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

const juntaVetores = (vetorPilha, vetorAdiciona) => {

    for(let i = 0; i < vetorAdiciona.length; i++){
        vetorPilha.push(vetorAdiciona[i])
    }

    return console.log(vetorPilha)

}

juntaVetores(vetorPilha, vetorAdiciona)
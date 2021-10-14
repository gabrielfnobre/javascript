const qualMaiorQualMenor = vetor => {

    let maior = vetor[0];
    let menor = vetor[0];

    for(let i = 0; i <= vetor.length; i++){
        if (menor > vetor[i]){
            menor = vetor[i];
        } else if (maior < vetor[i]) {
            maior = vetor[i];
        }
    }

    return console.log(`O menor valor do vetor é ${menor} e o maior valor do vetor é ${maior}...`)

}

let vetor = [21, 52, 48, 2, 78, 96, 45]
let vetor2 = [1, 2, 3, 4, 5, 6, 7]
let vetor3 = [96, 78, 44, 15, 45, 15, 14, 75]

qualMaiorQualMenor(vetor)
qualMaiorQualMenor(vetor2)
qualMaiorQualMenor(vetor3)
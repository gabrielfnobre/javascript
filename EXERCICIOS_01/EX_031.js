const quantosNegativos = vetor => {

    let negativos = [];

    for(let i = 0; i <= vetor.length; i++){
        if (vetor[i] < 0){
            negativos.push(vetor[i]);
        }
    }

    return console.log(`O número de valores negativos é ${negativos.length}, e eles são: ${negativos}...`)

}

let vetor = [21, -52, 48, 2, -78, 96, 45]
let vetor2 = [1, 2, -3, 4, 5, -6, -7]
let vetor3 = [-96, 78, -44, 15, -45, 15, -14, 75]

quantosNegativos(vetor)
quantosNegativos(vetor2)
quantosNegativos(vetor3)
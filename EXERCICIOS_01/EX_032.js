const mediaDoArray = vetor => {

    let media = 0;
    let valores = 0;

    for(let i = 0; i < vetor.length; i++){
        valores += vetor[i];
        console.log(valores)
    }

    media = (valores / vetor.length);

    return console.log(`A média dos valores do vetor é ${media}...`)

}

let vetor = [2, 4, 6, 8, 10, 2, 5]
let vetor2 = [5, 5, 5, 5, 5, 5, 5]
let vetor3 = [1, 2, 3, 4, 5, 6, 7, 8]

mediaDoArray(vetor)
mediaDoArray(vetor2)
mediaDoArray(vetor3)
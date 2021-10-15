const trocaPrimeiroElemento = (vetor1, vetor2) => {
    vetor1[0] = vetor2[0]
    vetor2[0] = vetor1[0]

    return console.log(vetor1, vetor2)
}

let vetor1 = ['a', 'b', 'c']
let vetor2 = ['d', 'e', 'f']

trocaPrimeiroElemento(vetor1, vetor2)
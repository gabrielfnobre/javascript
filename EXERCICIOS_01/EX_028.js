const paresEImpares = vetor => {
    let pares = 0;
    let impares = 0;

    for(let i in vetor){
        if (i % 2 == 0){
            pares++;
        } else if (i % 2 != 0){
            impares++;
        }
    }

    return console.log(`No vetor que foi passado, ${pares} são pares e ${impares} são ímpares`);
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
paresEImpares(vetor)
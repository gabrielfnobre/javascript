const mostraImpares = (menor = 0, maior = 100) => {

    let realyMenor
    let realyMaior

    if (menor > maior){
        realyMenor = maior
        realyMaior = menor    
    } else {
        realyMenor = menor
        realyMaior = maior  
    }

    console.log('\n')
    for(let i = realyMenor; i <= realyMaior; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }

    return console.log(`Acima você tem os números ímpares entre ${realyMenor} e ${realyMaior}`)

}

mostraImpares()
mostraImpares(5, 25)
mostraImpares(84, 55)
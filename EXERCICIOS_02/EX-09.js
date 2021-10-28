const repetidor = (valor, vezes) => {
    let arrayResult = []
    for(let i = 0; i < vezes; i++){
        arrayResult.push(valor)
    }
    return console.log(arrayResult)
}

repetidor('código', 2)
repetidor(7, 3)
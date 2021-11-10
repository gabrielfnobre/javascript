const segundoMaior = array => {
    let numMaior = 0
    let segundoMaior = 0
    for(let i = 0; i < array.length; i++){
        if (numMaior < array[i + 1]){
            numMaior = array[i + 1]
        }
    }
    for(let i = 0; i < array.length; i++){
        if (segundoMaior != numMaior && segundoMaior > array[i + 1]){
            segundoMaior = array[i]
            console.log(segundoMaior)
        }
    }
    return console.log(segundoMaior)
}

segundoMaior([12, 16, 1, 5])
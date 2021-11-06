const somenteDigitosTal = (array, numero) => {
    let novoArray = []
    for(i of array){
        const quantidadeDeNum = String(i).length
        if (numero === quantidadeDeNum){
            novoArray.push(i)
        }
    }
    return console.log(novoArray)
}

somenteDigitosTal([38, 2, 365, 10, 125, 11], 2)
somenteDigitosTal([5, 9, 1, 125, 11], 1)
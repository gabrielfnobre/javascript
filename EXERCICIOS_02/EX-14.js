const ObjetoParaArray = objeto => {
    let newArray = []
    newArray.concat([[Object.keys(objeto), objeto.value)
    return console.log(newArray)
}

ObjetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software'
})
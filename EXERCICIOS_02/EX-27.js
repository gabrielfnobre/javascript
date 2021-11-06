const trocaChaveValor = objeto => {
    let chaves = Object.keys(objeto)
    let valores = Object.values(objeto)
    let novoObjeto = {}
    for(let i = 0; i < chaves.length; i++){
        novoObjeto[valores[i]] = chaves[i]
    }
    return console.log(novoObjeto)
}

trocaChaveValor({a: 1, b: 2, c: 3})
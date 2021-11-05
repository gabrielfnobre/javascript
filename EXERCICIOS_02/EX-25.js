const pesquisar = (assunto, arrayDeAssuntos) => {
    let assuntosEncontrados = []
    for(let palavra of arrayDeAssuntos)
        if (palavra.includes(assunto))
        assuntosEncontrados.push(palavra)

    return console.log(assuntosEncontrados)
}

pesquisar('pro', ['programação', 'mobile', 'profissional'])
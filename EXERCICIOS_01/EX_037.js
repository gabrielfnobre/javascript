const pa = (termo, a1, r) => {
    
    let termoAtual = a1
    let position = 1
    
    while(termoAtual <= termo){
        console.log(`${position}.${termoAtual}`)
        termoAtual += r
        position++
    }
    
    let soma = ((a1 + termo) * (position - 1)) / 2 

    return console.log(`A soma dos termos é: ${soma}`)

}

const pg = (termo, a1, r) => {
    
    let termoAtual = a1
    let position = 1
    
    while(termoAtual <= termo){
        console.log(`${position}.${termoAtual}`)
        termoAtual *= r
        position++
    }
    
    let soma = (((r ** (position - 1)) - 1) * a1) / (r - 1)

    return console.log(`A soma dos termos é: ${soma}`)

}

pa(100, 1, 1) 

pg(625, 5, 5)
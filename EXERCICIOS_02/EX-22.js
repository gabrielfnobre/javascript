const aleatorio = num => {
    min = Math.ceil(1)
    max = Math.floor(11)
    sorteado = Math.floor(Math.random() * (max - min)) + min
    if (num === sorteado){
        resultado = `Parabéns o número sorteado foi ${num}`
    } else {
        resultado = `Que pena, o número sorteado foi ${sorteado}`
    }
    return console.log(resultado)
}

aleatorio(1)
aleatorio(2)
aleatorio(3)
aleatorio(4)
aleatorio(5)
aleatorio(6)
aleatorio(7)
aleatorio(8)
aleatorio(9)
aleatorio(10)
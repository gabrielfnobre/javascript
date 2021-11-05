const quantidadeDeLetras = (letra, string) => {
    let arrayString = string.split('')
    let resultado = 0
    for(let i = 0; i < arrayString.length; i++){
        if (arrayString[i] === letra){
            resultado += 1
        }
    }
    return console.log(resultado)
}

quantidadeDeLetras('r', 'A sorte favorece os audazes')
quantidadeDeLetras('c', 'Conhece-te a ti mesmo')
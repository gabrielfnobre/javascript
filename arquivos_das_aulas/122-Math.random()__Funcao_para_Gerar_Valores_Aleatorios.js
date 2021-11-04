//MATH.RANDOM():
//O método "random()", é uma função que gera um número aleatório entre 0 e 1.
//Seus números aleatórios são sempre gerados á partir do 0, mas nunca alcançam o 1 

const aleatorio = num => {
    min = Math.ceil(1) //Usamos Math.ceil() para arredondar todos os valores para baixo no valor mínimo como "1"
    max = Math.floor(11) //Usamos Math.floor() para arredondar os valores para atingirem no máximo ao valor "10"
    sorteado = Math.floor(Math.random() * (max - min)) + min //Seguindo a fórmula ao lado conseguimos fazer com que Math.random() execute randomicamente entre um valor máximo e mínimo...
    if (num === sorteado){
        resultado = `Parabéns o número sorteado foi ${num}`
    } else {
        resultado = `Que pena, o número sorteado foi ${sorteado}`
    }
    return console.log(resultado)
}

//Veja que vamos tentar todas as possibilidades, pelo menos uma dará certo...
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
const array1 = ['javascript', 1, "3", 'web', 20]
const array2 = ['a', "b"]

const iteracaoSeIgualaNumber = valor => typeof valor == typeof 0
const filtrarNumeros = valor => console.log(valor.filter(iteracaoSeIgualaNumber))

filtrarNumeros(array1)
filtrarNumeros(array2)
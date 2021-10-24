//SHIFT():
//O método "shift()" - literalmente traduzido por "mudar" - é um método interno do Array onde podemos remover sempre o 1º elemento de um array, ele é semelhante ao "pop()", mas enquanto o pop() retira o último elemento, o shift() retira sempre o primeiro.
//Vejamos um exemplos:

//REMOVENDO O PRIMEIRO ELEMENTO DE UM ÍNDICE:
const pilotos = ['Vettel', 'Alonso', 'Raikkonen']
pilotos.shift() //Veja que só o Vettel foi removido...
console.log('1)', pilotos) 
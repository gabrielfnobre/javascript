//UNSHIFT():
//O método "unshift()" - literalmente traduzido por "desmudar" - é um método interno do Array que faz o contrário do "shift()", enquanto o shift() remove o primeiro elemento da array, o unshift() adiciona um valor ao primeiro índice de um array 
//Vejamos um exemplo:

//ADICIONANDO AO PRIMEIRO ELEMENTO DE UM ÍNDICE:
const pilotos = ['Vettel', 'Alonso', 'Raikkonen']
pilotos.unshift('Hamilton') //Veja que Hamilton foi para o primeiro índice do array...
console.log('1)', pilotos) 
//REPEAT():
//O método "repeat()" é um método das Strings que nós usamos quando desejamos repetir determinada string.
//Esse método pode ser chamado por uma string literalmente ou por uma variável que contenha uma string, e ele recebe como parâmetro um número inteiro que irá ser usado para multiplicar a string pelo número de vezes que for passada no método.

//REPETINDO STRINGS A PARTIR DE UMA STRING LITERAL NA CHAMADA:
console.log('1)',' Me Repita '.repeat(5)) //Note que usamos uma string literal para chamar a função repeat(), isso dá certo por que as strings também podem ser consideradas como objetos...



//REPETINDO STRINGS CHAMADAS A PARTIR DE UMA VARIÁVEL QUE CONTENHA UMA STRING:
const varString = ' Me repita '
console.log('\n2)', varString.repeat(5))
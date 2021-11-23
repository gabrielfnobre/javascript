//INDEXOF():

//O método indexOf() é um método de String utilizado para capturar a posição índice de um determinado elemento dentro de uma string, mas podemos utilizá-lo também em arrays somente para capturar valores do tipo "string" que estiverem dentro do nosso array, retornando para nós o valor númerico do índice.
//Quando um elemento não existe dentro do array, ele simplesmente volta o valor final do array, que é "-1"...

//RETORNANDO UM VALOR EXISTENTE DENTRO DE UM ARRAY:
const array = ['a', 'b', 'c']
console.log('1)', array.indexOf('c')) //Perceba que ele retorna perfeitamente qual é o valor índice de 'c'...




//RETORNANDO UM VALOR QUE NÃO EXISTE DENTRO DE UM ARRAY:
console.log('\n2)', array.indexOf('d')) //Perceba que, quando o valor não existe ele retorna o valor final do array, que é "-1"...




//VALORES NÚMERICOS TAMBÉM PODEM SER PESQUISADOS SE ELES ESTIVEREM DENTRO DE UM ARRAY:
const arrayNums = [1, 2, 3, 4, 5]
console.log('\n3)', arrayNums.indexOf(5)) //Lembre-se que "indexOf()" foi feito para strings, por isso ele não retorna nenhum valor numérico...
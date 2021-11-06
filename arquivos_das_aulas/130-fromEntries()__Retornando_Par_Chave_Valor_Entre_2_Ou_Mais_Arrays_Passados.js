//FROMENTRIES():
//O método "fromEntries()" é um método de Object que captura 2 arrays dentro de um array e os retorna por par chave e valor, para cada valor correspondente em sequencia dentro de cada array...
//Vejamos alguns exemplos...

//RETORNANDO UM OBJETO Á PARTIR DE 2 ARRAYS DENTRO DE UM ARRAY...
const conjuntoDeValores = [[1, 2] , [3, 4]] //Perceba que são os valores dentro de um único array que serão o par chave valor...
const objetoGerado = Object.fromEntries(conjuntoDeValores)
console.log('1)', objetoGerado)




//PRECEDÊNCIA DOS NÚMEROS SOBRE OS CARACTERES:
const conjuntoAlfaNum = [['a', 'b'], [1, 2]] //Perceba que apesar do array com números ser o segundo, ele tem precedência sobre o primeiro na geração de par chave valor...
const objetoAlfaNum = Object.fromEntries(conjuntoAlfaNum)
console.log('\n2)', objetoAlfaNum)




//SOMENTE PARES CHAVE E VALOR:
const conjuntoMaiorDoQueDeveria = [['a', 'b', 'c', 'd'], [1, 2, 3, 4]] //Perceba que poderíamos formar 4 pares de par chave e valor, mas o fromEntries() só gera um par chave e valor para cada array, por isso os demais valores que ultrapassarem o índice 1 serão ignorados...
const objetoMaiorDoQueDeveria = Object.fromEntries(conjuntoMaiorDoQueDeveria)
console.log('\n3)', objetoMaiorDoQueDeveria)
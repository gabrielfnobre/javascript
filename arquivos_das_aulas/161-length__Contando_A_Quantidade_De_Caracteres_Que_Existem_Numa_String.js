//LENGTH:

//A propriedade "length" pode ser usada tanto em strings quanto em arrays, o principal objetivo dela é contar quantos caracteres ou valores índice existem dentro de um array, retornando um número com o valor da quantidade de elementos iteráveis que existem dentro do elemento.

//Vejamos alguns exemplos:

//USANDO LENGHT PARA CONTAR QUANTOS CARACTERES EXISTEM DENTRO DE UMA STRING:
let palavra = 'palavra'
console.log('1)', palavra.length) //Perceba que ele retornará o número 7


//USANDO LENGHT PARA CONTAR QUANTOS ELEMENTOS EXISTEM DENTRO DE ARRAY:
let array = [1, 2, 3, 4, 5]
console.log('2)', array.length) //Perceba que ele retornará o número 5


//LENGTH NÃO SERVE PARA CONTAR QUANTAS CHAVES EXISTEM DENTRO DE UM OBJETO:
let objeto = {a: 1, b: 2, c:3, d:4, c:5}
console.log('3)', objeto.length) //Veja que length não consegue contar quantas chaves têm dentro o objeto...

let objeto2 = {a: [1, 2, 3], b: 2, c:3}
console.log('4)', objeto2.a.length) //Mas length pode ser usado para contar quantos índices existem dentro de uma chave que contenha um array atribuído sobre ela...
//MAP():
//O "map()" é um método o tipo Array que serve para executar uma determinada função call back sobre todos os valores de array e então gerar um novo array com o resultado desejado depois de todos os valores terem passado pelo array.
//O map() sempre irá retornar um único parâmetro sobre as funções call back, esse parâmetro equivale a cada valor do array durante uma iteração.
//Detalhe importante: O método map() sempre vai criar um novo array á partir do array operado, ele não vai modificar o array original. Além disso, as funções call back dentro de map() sempre deverão apresentar retorno.
//ATENÇÃO!!! O map(), assim como o forEach também pode retornar os valores de índice e o array total se colocarmos mais de um parâmetro no map.

//USANDO MAP PARA DOBRAR VALORES DE UM ARRAY:
const nums = [1, 2, 3, 4, 5]
const numsDobro = nums.map(function (i) { //Veja que map recebe uma função dentro dele que terá como parâmetro o iterável do map()...
    return i * 2 //Sempre deverá ser apresentado um retorno, esse retorno será convertido em um novo array...
})

console.log('1)', numsDobro)  //Veja que os números foram dobrados...



//PODEMOS ENCADEAR UM MAP() UM NO OUTRO:
//Veja que criamos 3 funções que deverão ser encadeadas em um map() após o outro para gerar um resultado final...
const funcMaisDez = i => i + 10 //Essa função soma o número á 10
const funcTriplo = i => i * 3 //Essa multiplica o número por 3
const funcConvertDinheiro = i => `R$ ${parseFloat(i).toFixed(2).replace('.', ',')}` //E essa mostra o resultado como se fosse dinheiro...
const monetizado = nums.map(funcMaisDez).map(funcTriplo).map(funcConvertDinheiro) //E aqui temos o encadeamento, onde o primeiro map operada sobre o array armazenado em "nums" e á partir daí todos os resultados são operados sobre outras funções dentro de map()...
console.log('\n2)', monetizado)



//USANDO MAP() ENCADEADO PARA PEGAR VALORES DE UM CARRINHO DE COMPRAS:
const carrinhoDeCompras = [ //Veja que temos os valores das compras de uma pessoa em JSON
    '{ "nome": "borracha", "preco": 3.45 }',
     '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
//Abaixo temos 3 funções onde consecutivamente vamos: converter o JSON para objeto, extrair somente o preço e deixar o preço em real...
const conversorJson = i => JSON.parse(i)
const isolaPreco = i => i.preco
const retornaReal = i => `R$ ${parseFloat(i).toFixed(2).replace('.', ',')}`

//Abaixo nós encadeamos os map() para que realizem as funções consecutivamente...
const precos = carrinhoDeCompras.map(conversorJson).map(isolaPreco).map(retornaReal)
console.log('\n3)', precos) //Veja que ao final temos apenas um array contendo somente os preços...


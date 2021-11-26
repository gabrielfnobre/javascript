//FOR(OF):
//O laço "for(of)" é um laço semelhante ao "for(in)", serve para iterar sobre um elemento interável, mas enquanto o "for in" tem como foco o array, trazendo como resultado os índices de um array, o "for of" pode ser utilizado em qualquer elemento iterável: strings, arrays, maps e sets, com a única excessão de não iterar sobre Objects. E invés de trazer o valor índice, ele traz o valor que existe dentro destes conjuntos.

//Vejamos como utilizar o laço for of...

//USANDO FOR(OF) EM STRINGS:
const string = 'String'

for(let letra of string) //Se formos usar só uma linha após o laço "for of" não há necessidade de colocar os colchetes...
console.log('1)', letra)




//USANDO FOR(OF) EM ARRAY:
const array = ['A', 'r', 'r', 'a', 'y']
console.log('\n')

for(let valor of array)
console.log('2)', valor)




//USANDO FOR(OF) EM OBJECT:
const objeto = {
    o: 'O',
    b: 'b',
    j: 'j',
    e: 'e',
    c: 'c',
    t: 't'
}
console.log('\n')

for(let valor of Object.keys(objeto)) //Perceba que o "for of" não itera sobre objetos diretamente, temos que retirar os nomes das chaves por através de um Object.keys() ou os valores pelo Object.values(), para que ele possa iterar sobre um array de nomes de chaves...
console.log('3)', valor)




//USANDO FOR(OF) EM MAP:
const map = new Map([ //Perceba que no map, assim como no object temos que trabalhar com chaves e valores...
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])
console.log('\n')

for(let valor of map.keys()) //Como os valores ficam dentro de um array, mas precisamos chamar o construtor "Map" para retirar somente as chaves...
console.log('4)', valor)

for(let valor of map.values()) //Como os valores ficam dentro de um array, mas precisamos chamar o construtor "Map" para retirar somente os valores...
console.log('4)', valor)

for(let valor of map.entries()) //Como os valores ficam dentro de um array, mas precisamos chamar o construtor "Map" para retirar chaves  valores...
console.log('4)', valor)




//USANDO FOR(OF) EM SET:
const set = new Set(['S', 'e', 't'])
console.log('\n')

for(let valor of set)
console.log('5)', valor)





//USANDO LAÇO FOR(OF) PARA CAPTURAR SOMENTE VALORES QUE POSSUEM UM PREFIXO..
//Perceba que criamos uma função que pega uma string para um assunto, se existe algum assunto relacionado dentro de um array de assuntos...
const pesquisar = (assunto, arrayDeAssuntos) => {
    let assuntosEncontrados = []
    for(let palavra of arrayDeAssuntos){ //Veja que dentro do for(of) criamos uma variável "palavra" que irá iterar sobre todos os valores do array "arrayDeAssuntos"
        if (palavra.includes(assunto)) //Usando "includes()" verificamos se o valor armazenado na variável "palavra" durante a iteração é incluso entre os valores do array iterado
        assuntosEncontrados.push(palavra) //Para cada iteração onde o includes() é verdadeiro o valor é adicionado ao array criado dentro da função e que será retornado...
    }

    return console.log('\n6)', assuntosEncontrados)
}

pesquisar('pro', ['programação', 'mobile', 'profissional'])
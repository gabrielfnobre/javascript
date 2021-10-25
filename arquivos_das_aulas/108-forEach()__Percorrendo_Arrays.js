//FOREACH():
//O "forEach()" - literalmente traduzido para "Para Cada" - é um método do Tipo Array usado para que possamos iterar entre todos os valores de um array retornando 1º os valores do array, 2º os índice e 3º o próprio array.
//O método forEach() consegue isso por que dentro dele existe uma função for que retorna a cada iteração os três valores.
//O método de usar o forEach() é pela utilização de funções call back dentro do parâmetro do forEach(), onde a função poderá receber até 3 parâmetros retornados pelo forEach() á cada iteração.

//ITERANDO UM ARRAY COMUM USANDO FOREACH():
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
console.log('1):')
aprovados.forEach(function (nome, indice) { //Veja que em nenhum momento nós criamos variáveis para nome e índice, elas são automáticas do método forEach() e pegam automáticamente 1º o valor do índice no momento da iteração e depois o valor índice de fato...
    return console.log(`${indice + 1}) ${nome}`)
})



//PASSANDO UMA FUNÇÃO PARA O FOREACH():
const exibirAprovados = (nome, indice) => console.log(`${indice + 1}) ${nome}`) //Note que criamos uma função que faz exatamente a mesma coisa que a função atribuída no forEach() acima...
console.log('\n2):')
aprovados.forEach(exibirAprovados) //e depois só atribuímos a função a um forEach() por através de uma variável, e ela foi executada sem problemas...



//PEGANDO SOMENTE O VALOR DO ARRAY:
console.log('\n3):')
aprovados.forEach(nome => console.log(nome)) //Veja que para pegar só os valores do array temos que obrigatóriamente usar um parâmetro na função call back que vai dentro do forEach()...



//PEGANDO SOMENTE DOS VALORES ÍNDICE:
console.log('\n4):')
aprovados.forEach((nome, indice) => console.log(indice)) //Veja que para pegar só o índice fomos obrigados a criar 2 parâmetros na função call back que vai dentro de forEach(), porém só utilizamos o segundo parâmetro, o primeiro ficou avulso...



//USANDO O TERCEIRO PARÂMETRO DO FOREACH():
console.log('\n5):')
aprovados.forEach((nome, indice, array) => console.log(`${indice + 1}º iteração: ${array}`))
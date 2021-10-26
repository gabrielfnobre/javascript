//FILTER():
//O método "filter()" é usado especificamente para aplicar alguma espécie de filtro sobre um array pré-existente. Diferente do método "map()", o filter() não retorna um array com a mesma quantidade de valores do array mapeado, mas com resultados diferentes. Não, em vez disso o método map() retorna um valor "true" ou "false", onde, para cada valor do array que retornar true de um determinado condicional, eles serão atribuídos ao array gerado por através do filter(), mas os valores que retornarem false serão ignorados.
//O filter(), assim como o forEach() e o map() podem retornar 3 valores, que são o valor do iterável, o índice do array no momento da iteração e o array em si.

//FILTRANDO TODOS OS VALORES DE UM ARRAY:
const produtos = [ //Veja que temos um array com vários produtos...
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const todos = produtos.filter(function() { //Perceba que filter() recebe uma callback assim como forEach() e map()...
    return true //Perceba que só colocamos "true" e todos os valores dentro do array serão verdadeiros, retornando todos os valores...
})
console.log('1)', todos)



//NÃO RETORNANDO NENHUM VALOR:
const nenhum = produtos.filter(function(){
    return false //Perceba que, quando colocamos que para todos os valores o retorno é false, o que teremos de volta será um array vazio...
})
console.log('\n2)', nenhum)



//RETORNANDO VALORES QUE OBEDECEM A DETERMINADOS CRITÉRIOS:
//Perceba que primeiro criamos as callbacks, onde uma avalia se os valores são acima de 500 e a outra avalia quais são frágeis...
const acimaDe500 = n => n.preco >= 500
const fragil = n => n.fragil == true //Aqui poderiamos até tirar o sinal de igual, pois naturalmente a chave fragil retorna um true ou false...
const soAcimaDe500eFragil = produtos.filter(acimaDe500).filter(fragil) //Perceba que encadeamos o filtro, retornando somente os produtos acima de 500 reais e que também são frágeis...

console.log('\n3)', soAcimaDe500eFragil)
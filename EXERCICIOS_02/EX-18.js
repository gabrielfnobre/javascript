const pegaPreco = a => a.preco
const somaPreco = (acumulador, atual) => acumulador + atual
const despesasTotais = a => a.filter(pegaPreco).reduce(somaPreco)

console.log(despesasTotais([{nome: "Jornal Online", categoria: 'informação', preco: 89.99}]))
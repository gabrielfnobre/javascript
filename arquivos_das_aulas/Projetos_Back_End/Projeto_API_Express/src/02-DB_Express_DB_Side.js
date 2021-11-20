//BANCO DE DADOS:

//Abaixo temos a criação de Banco de Dados fictício para armazenar alguns produtos, que irá simular o recebimento e mantenimento de dados dentro de uma Banco de Dados, bem como cada valor incerido irá receber um número sequencial.

//Abaixo temos um objeto responsável por números á sequência dos produtos adicionados ao banco de dados...
const sequence = {
    _id: 1, //Perceba que criamos a nossa propriedade (apenas um convenção) para dar início a sequência de ids...
    get id() {return this._id++} //Usando o método "get" toda vez que a chave "id" for referenciada, ela dará start a função "id()" que sempre irá retornar o id atual de acordo com o elemento que está chamando, que no caso será o objeto que guardará os produtos...
}

//Abaico temos o objeto que receberá os produtos, com suas chaves id e valores...
const produtos = {}

//Aqui temos uma função responsável por adicionar produtos ao objeto "produtos"...
function salvarProduto(produto) { 
    if (!produto.id) produto.id = sequence.id //Note que a função verifica se o produto tem id ou não, se não tiver, ela adiciona um id de acordo com a sequência de ids do objeto "produtos"
    produtos[produto.id] = produto //Se o id já tiver sido passado ela simplesmente passa o valor id para a chave do produto e o recebe o produto como valor para aquele respectivo "id"
    return produto
}

//Essa função mostra um determinado produto de acordo com o seu número id correspondente, se o id não existir ele mostra uma mensagem de que o produto não existe...
function getProduto(id) {
    return produtos[id] || console.log('Produto inexistente!')
}

//Essa função retorna todos os produtos do DB...
function getProdutos() {
    return Object.values(produtos)
}

//Como o nosso Banco será um Módulo do Node, usamos o module.exports para tornar as funções visíveis para o nosso arquivo servidor...
//Perceba que somente as funções estão visíveis, pois será por através delas que iremos visualizar o que temos no banco, e adicionar produtos...
module.exports = {
    salvarProduto,
    getProduto,
    getProdutos
}
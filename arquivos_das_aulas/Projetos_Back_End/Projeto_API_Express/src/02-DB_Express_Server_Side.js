//BANCO DE DADOS DE UM SERVIDOR:

//Abaixo temos a criação de um servidor para trabalhar com um DB que está em memória. O DB ele não possuí nenhuma integração com SQL ou coisa do tipo, é simplesmente um arquivo em memória que vai funcionar como uma espécie de DB fictício.
const porta = 3003

//IMPORT DE EXPRESS...
const express = require('express')
const app = express()

//IMPORT DO BANCO DE DADOS...
const db = require('./02-DB_Express_DB_Side')

//Geramos uma função middleware, onde pegamos todos os valores do banco de dados...
app.get('/produtosGet', (request, response, next) => {
    response.send(db.getProdutos())
})

//Aqui temos uma função que captura um produto pelo número "id", mas perceba que para chamar um produto pelo id pela URL, temos que colocar o número id dentro do URL. Para isso temos o elemento "params", simbolizado pelo sinal de ":", e na sequência temos o nome da variável que desejamos referenciar o valor, que no caso é a variável "id"...
app.get('/produtoGet/:id', (request, response, next) => {
    response.send(db.getProduto(request.params.id)) //Note que para obter o valor desejado como resposta, no método getProduto utilzamos utilizamos o "request", junto ao parâmetro e a variável, o valor que for passado logo após a barra, por exemplo: '/produtoGet/1', será procurado dentro do banco de dados...
})

//Perceba que para receber dados, o método já seria o post, um método mais seguro que precisará de ser codificado para transmitir os dados via rede. Para tanto usamos o método post() na nossa função middleware...
app.post('/salvarProdutoPost', (request, response, next) => {
    const produto = db.salvarProduto({ //Dentro da função geramos uma variável "produto" que irá receber os dados para o valor que será salvo dentro do objeto "produtos" no nosso banco de dados...
        nome: request.body.name, //Note que cada produto terá um nome e um preco, temos que usar o request.body, que serão responsáveis por incorporar os dados recebidos no corpo da requisição, e não na URL, para tanto usaremos o postman para poder atribuir esses valores ás respectivas chaves...
        preco: request.body.preco
    })
    response.send(produto) //Ao final, nossa função retornará para nós o produto que foi adicionado ao Banco de Dados...
})

app.listen(porta, () => {
    console.log(`O servidor está ativo na porta ${porta}...`)
})

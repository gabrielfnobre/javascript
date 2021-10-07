//CALL:
//Visto que funções também são tipos em Javascript, é claro que vão existir funções built-ins para as funções, dentre essas funções built-ins, temos a função "call".
//A função call é responsável por aplicar os valores de um objeto sobre uma função qualquer, geralmente usamos funções call para apresentar um determinado valor ou para filtrar a mensagem que o usuário vai ver de terminada forma...

//USANDO FUNÇÃO CALL:
//Essa é uma função que tem o objetivo de pegar os valores das chaves "nome", "preco" e "desconto" e calcular quanto ficará o produto com o desconto e o imposto aplicado sobre eles, e depois apresenta o produto segundo a moeda...
function calculaPreco(imposto = 0, moeda = 'R$') { //Perceba que a função não é uma função construtora e nem factory, ela simplesmente está sendo usada para filtrar uma informação...
    return `O preço calculado para o(a) ${this.nome} é ${moeda} ${(this.preco * (1 - this.desconto) * (1 + imposto)).toFixed(2)}`
}

//Abaixo já temos 2 objetos com seus devidos valores...
const televisao = {
    nome: 'TV de 50"',
    preco: 3499.00,
    desconto: 0.10
}

const notebook = {
    nome: 'Notebook',
    preco: 2199.00,
    desconto: 0.09
}

//Veja como o call é usado, ele vai entre a chamada da função e o campo de parâmetros dela, onde ele acrescenta um campo de parâmetro á função - o primeiro campo - onde deve ir o nome do objeto que desejamos filtrar e chamar...
console.log(calculaPreco.call(televisao, 0.15));
console.log(calculaPreco.call(notebook, 0.12, '$')); //Aqui usamos todos os campos de parâmetro da função...
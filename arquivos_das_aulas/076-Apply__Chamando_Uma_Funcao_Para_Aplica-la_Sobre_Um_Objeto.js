//APPLY:
//Visto que funções também são tipos em Javascript, é claro que vão existir funções built-ins para as funções, dentre essas funções built-ins, temos a função "apply".
//A função apply é responsável por aplicar os valores de um objeto sobre uma função qualquer, geralmente usamos funções apply para apresentar um determinado valor ou para filtrar a mensagem que o usuário vai ver de terminada forma...

//USANDO FUNÇÃO APPLY:
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

//Veja como o apply é usado, colocamos o nome da função que desejamos filtrar, em seguida no campo de parâmetros de apply colocamos o nome do objeto que desejamos aplicar a função, e depois separamos por vírgula um array que vai receber os valores que deveriam ter sido colocamos no campo de parâmetros original da função...
console.log(calculaPreco.apply(televisao, [0.10]));
console.log(calculaPreco.apply(notebook, [0.12, '$'])); //Aqui usamos todos os campos de parâmetro da função...
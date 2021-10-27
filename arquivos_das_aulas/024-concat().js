//CONCAT():
//O método "concat()" faz a concatenação de uma string ou array no javascript.
//Podemos usá-lo para concatenar diretamente strings e arrays declarados literalmente tanto na chamada o método concat() quando no seu campo de parâmetros.
//Vale uma observação, o método concat() não irá mudar a string ou array que estiverem armazenados numa variável, em vez disso ele irá criar uma nova string ou array...

//CONCATENANDO STRINGS LITERALMENTE:
console.log('1) Gabriel'.concat(' Ferreira ').concat('Nobre')); //Perceba que estamos escrevendo strings literalmente sobre o método concat(), tanto como chamada, quanto passando strings por através dos parâmetros, e até encadeando um no outro...



//CONCATENANDO STRINGS QUE ESTÃO ARMAZENADAS EM VARIÁVEIS:
let nome = 'Caderno ';
let categoria = "Papelaria ";
let nomeCat = `Rubões`;

let stringNova = nome.concat(categoria, ': ').concat(nomeCat, ' ', nomeCat) //Perceba que usamos as variáveis acima e as concatenamos tanto chamando o método quanto passando as variáveis com strings como parâmetros, e ainda por cima vimos que o método concat pode aceitar mais de um parâmetro, aceitando strings e até variáveis, sejam elas quantas forem...

console.log('\n2)', stringNova)
console.log(typeof stringNova) //Note que as strings continuam sendo strings...



//CONCATENANDO ARRAYS LITERALMENTE:
let arrayLit = [1, 2].concat(3, 4, [5, 6], [[7, 8]]) //Veja que atribuímos arrays literalmente sobre o concat() tanto como chamada, quanto como parâmetros, veja que passamos tantos valores individuais, quanto arrays e até matrizes...
console.log('\n3)', arrayLit) //Quando foi concatenado, todos os valores foram aderidos a um único array, com excessão da matriz que veio com o formado de um array dentro de um array...
console.log(typeof  arrayLit) //E veja que diferente das strings, ela gerou um object...



//CONCATENANDO ARRAYS Á PARTIR DE VARIÁVEIS:
const filhas = ['Juvaneide', 'Cibalena'] 
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Valterclan') //Note que só usamos as variáveis que contém os arrays e concatenamos elas em um novo array, e ainda passamos um novo nome que aderiu ao array criado...
console.log('\n4)', todos, filhas, filhos) //Veja que o array é realmente um novo, e os outros continuam sendo eles mesmos...
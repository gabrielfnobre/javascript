//IMPERATIVO VS DECLARATIVO:
//Quando escrevemos os nossos códigos, podemos optar por 2 tipos de código fonte nas nossas aplicações, podemos optar por um código fonte "Declarativo" ou "Imperativo":
//Imperativo: Um código fonte imperativo é aquele onde toda a lógica do código está exposta por através da sua programação, por exemplo, um laço for é um estilo de iteração declarativa, um while também é um estilo de codificação imperativa.
//Declarativo: Um código declarativo é aquele código que está mais ligado ao paradigma funcional, onde temos funções integradas da linguagem que por assim dizer "escondem" o código de nós, nós sabemos para que elas servem, mas elas não ficam expondo todo o funcionamento por de trás do código.
//Desenvolvedores que utilizam códigos Declarativos são mais bem vistos, pois isso mostra que ele tem um bom conhecimento da linguagem e de todas as suas ferramentas. O código fica menos carregado, pois todo funcionamento será entregue as funções buit-ins. E se não bastasse essas vantagens, o código fica mais limpo.
//Vejamos um exemplo básico:

//Vamos ver um exemplo de 2 códigos, um imperativo e outro declarativo, onde temos que tirar a média entre as notas de 2 alunos...
const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativo:
const media = function(alunos) {
    let total = 0
    for(let i = 0; i < alunos.length; i++){
        total += alunos[i].nota
    }
    return total / alunos.length //Veja acima como toda a declaração de código teve de ser escrita e bem detalhada no código fonte....
}

console.log('Usando método imperativo:', media(alunos))

//Declarativo:
const pegaNotas = a => a.nota
const somaNotas = (acumulador, atual) => acumulador + atual
//Note acima que criamos 2 funções que podem ser reaproveitadas quando quisermos...

console.log('\nUsando método declarativo:', alunos.map(pegaNotas).reduce(somaNotas) / alunos.length )
//E em uma única linha pegamos as notas, colocamos num array, e depois fizemos a soma de um valor por outro e dividimos para tirar a média...
//SPREAD:
//O operador spread - traduzido literalmente para espalhamento - é um operador que tem a missão justamente de espalhar um campo de iteráveis ou uma string sem que seja necessário referenciar literalmente cada um dos elementos índice do array ou string.
//O símbolo do operador spread são os 3 pontos "..." usamos ele antes do nome de um elemento iterável, ele facilita que possamos atribuir todos os índices de um array ou as letras de uma string no campo de parâmetros de uma função.
//Vejamos alguns exemplos:

//APLICANDO O SPREAD A UMA FUNÇÃO QUE PRECISA DE 3 ARGUMENTOS:
const soma = (x, y, z) => { //Note que a função soma precisa de 3 argumentos...
    return x + y + z
}

const num = [1, 2, 3, 4] //E temos um array atribuído a uma variável chamada "num" que contém 4 elementos...
console.log('1)', soma(...num)) //Veja aqui o spread em ação, ele foi escrito antes do nome da variável que contém 4 elementos, como a função soma só precisa de 3 elementos, o spread mostra somente os elementos necessários para a função, fazendo com que ela pegue os 3 primeiros elementos e ignore os restantes...



//APLICANDO SPREAD A STRINGS:
//Quando usamos strings, o spread trata cada letra da string como se fosse um iterável de um array
const palavra = 'Olá tudo bem?' //Essa string têm 12 caracteres...
const mostraSo3 = (a, b, c) => { //Mas a função mostraSo3 vai pegar só os 3 primeiros caracteres...
    return a + b + c
}
console.log('\n2)', mostraSo3(...palavra)) //Passando nossa strings com o operador spread nossa string será transformada num array onde cada caractere será um valor iterável...

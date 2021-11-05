//INCLUDES():
//O método "includes()" é um método usado em elementos iteráveis, como Arrays e Strings, onde verificamos se um determinado valor passado dentro no includes() está presente dentro da iteração. Por exemplo digamos que o valor que desejamos verificar é "pro", e dentro dos arrays temos algumas strings que contém a sílaba "pro" entre elas, esses valores irão retornar "true", enquanto os demais que não contém a sílaba "pro" irão retornar "false".
//Vejamos alguns exemplos: 

//VERIFICANDO UM ARRAY INTEIRO COM INCLUDES():
const arrayNovo = [1, 2, 3, 4, 5, 6]
console.log('1)', arrayNovo.includes(4)) //Veja que ao verificar um array completo, verificamos se dentro do array existe o valor "4", a resposta sempre será um valor booleano...
console.log('1)', arrayNovo.includes(7))




//VERIFICANDO SE UM VALOR EXISTE DENTRO DE UMA STRING:
const nome = 'Gabriel'
console.log('\n2)', nome.includes('bri')) //Como uma string também é um objeto iterável, podemos fazer uma pesquisa dentro de uma string...




//USANDO LAÇO FOR(OF) PARA CAPTURAR OS VALORES DE UM ARRAY:
//Perceba que criamos uma função que pega uma string para um assunto, se existe algum assunto relacionado dentro de um array de assuntos...
const pesquisar = (assunto, arrayDeAssuntos) => {
    let assuntosEncontrados = []
    for(let palavra of arrayDeAssuntos){ //Veja que dentro do for(of) criamos uma variável "palavra" que irá iterar sobre todos os valores do array "arrayDeAssuntos"
        if (palavra.includes(assunto)) //Usando "includes()" verificamos se o valor armazenado na variável "palavra" durante a iteração é incluso entre os valores do array iterado
        assuntosEncontrados.push(palavra) //Para cada iteração onde o includes() é verdadeiro o valor é adicionado ao array criado dentro da função e que será retornado...
    }

    return console.log('\n3)', assuntosEncontrados)
}

pesquisar('pro', ['programação', 'mobile', 'profissional'])





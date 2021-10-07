//FUNÇÕES IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION):
//As IIFE são funções invocadas automáticamente, assim que o código é carregado, elas que chamam a si mesmas. As IIFE sempre devem ser functions expressions, ou seja, funções anônimas.
//A grande vantagem das IIFE é que elas fogem totalmente do escopo global, tudo o que acontece com elas fica dentro do module.exports da função e não pode ser afetado de forma alguma pelo escopo global - a menos que a própria IIFE faça uma chamada direta ao escopo global é claro.

//CRIANDO IFFE:
(function (valor, nome) { //A sintaxe de uma IIFE é muito simples, basta criar uma função anônima e envolvê-la por parênteses, e tudo o que estiver dentro dela será referenciado somente ao contexto da função...
    console.log("Eu sou uma função auto-invocada!");
    var numero = valor;
    var nome = nome;
    console.log(`O valor ${numero} por extenso se escreve ${nome}.`);
})(4, 'quatro') //Para que a função invoque a si mesma, usamos o parênteses de invocação, assim com fazemos com as funções normais, podemos até passar parâmetros para eles...


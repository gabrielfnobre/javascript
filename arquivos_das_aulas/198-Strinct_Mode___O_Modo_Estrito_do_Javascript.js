//STRICT MODE:

//O Strict Mode, ou Modo Estrito do Javascript é um método que utilizamos para fazer com que o nosso Javascript trabalhe de uma forma mais "fortemente tipada", evitando algumas falhas que acontecem no javascript quando ele está trabalhando no Modo Convencional.

//                                  O que ele vai fazer exatamente no Javascript?

//Ele vai impedir que algumas que algumas coisas aconteçam como: 

//      # Declaração implícita de variável - ele impede que possamos declarar uma variável sem usar "var", "let" ou 
//                                           "const", isso é bom para impedir que variáveis indesejáveis sejam criadas;

//      # Declaração dupla de argumentos - ele impede que 2 argumentos com nomes iguais sejam declarados, isso é bom para
//                                          impedir que declaremos um mesmo argumento 2 vezes numa função;

//      # Deleção inapropriada de elementos - ele impede que elementos essenciais do Javascript como "window" possam ser
//                                            deletados sem querer;

//Ou seja, o strict mode é um método que está ai para nos ajudar a evitar inconsistências de codificação e de tratamentos de dados.

//                                      Onde o Strict Mode pode ser utilizado?

//O Strict Mode trabalha dentro de escopos, se nós o utilizarmos num determinado escopo, todo àquele escopo estará submetido ao Strict Mode, qualquer escopo fora dele não estará submetido ao Strict Mode, por isso é importante saber onde e como utilizá-lo, uma vez declarado sobre o escopo global todo e qualquer código estará submetido ao Strict Mode.

//                                            Quando utilizar Strict Mode?

//Não seria sábio usar Strict Mode em todo e qualquer código, visto que o Strict Mode é uma ferramenta para garantir que desvios de codificação e desvios de dados não aconteçam, devemos usar somente quando esses desvios não forem aceitáveis.

//Vejamos alguns exemplos com e sem Strict Mode:
//OBSERVAÇÕES: Para que os exemplos funcionem execute no navegador.

//Declaração de variável implícita...
nome = 'Gabriel'
console.log("Olá " + nome) //Perceba que funciona normalmente no navegador...

// //Veja agora um exemplo onde vamos usar argumentos duplicados...
let soma = function(a, a, b) {
    console.log(a + a + b)
}
soma(1, 2, 3) //Note que a soma era para dar 6, mas dá 7 por que quando os argumentos são duplicados eles pegam o último 
                //valor que foi passado como parâmetro e atribui para ambos os argumentos...

// //Declaração de variável implicita com Strict Mode não funciona...
// let DigaOi = () => {
//     "use strict" //É assim que usamos a declaração do Strict Mode, perceba que ele só  funciona dentro o escopo da 
//     nomeFuncao = 'Gabriel' //função.
//     console.log("Olá " + nomeFuncao + "!!")
// }
// DigaOi()


// //Veja agora um exemplo onde vamos usar argumentos duplicados...
// let somaEstrita = function(a, a, b) {
//     "use strict" //Perceba que a função nem é carregada, pois o javascript nem irá aceitar...
//     console.log(a + a + b)
// }
// somaEstrita(1, 2, 3)

// function deletarWindow(){
//     "use strict"
//     return delete window.document //Veja que ele já avisa que não pode deletar o elemento document...
// }
// deletarWindow()
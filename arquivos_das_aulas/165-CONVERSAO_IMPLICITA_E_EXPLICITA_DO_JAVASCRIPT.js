//CONVERSÃO IMPLÍCITA E EXPLÍCITA DO JAVASCRIPT:

//O javascript possuí uma característica interna dele que são as conversões: implícita e explícita. Do que elas se tratam?
/*
    - CONVERSÃO IMPLÍCITA:
        A conversão implícita é uma conversão que o próprio javascript pode fazer sobre um dado que se parece muito com outro tipo da dado. Ela acontece muito quando fazemos comparações entre um valor string e um number onde os dois valores são identicos embora pertençam a tipos diferentes.
        Podemos ver isso usando o operador de "==", um operador que compara somente se o valor do dado é igual, por exemplo, um dado string "5" e um dado number 5, irão equivaler ao valor "true" numa comparação "==", isso acontece por que antes de comparar os 2 valores o Javascript irá usar a conversão implícita para converter os valores numéricos para o tipo de dado string.

    - CONVERSÃO EXPLÍCITA:
        A conversão explícita é feita diretamente pelo programador, onde utilizamos um casting "String()" ou "Number()" por exemplo para transformar um dado totalmente no tipo de dado que desejamos.
        Por exemplo, quando transformamos o dado numérico 10 em uma string usando "String(10)". Para verificarmos se uma conversão explícita deu certo podemos usar o operador de "===" (igual explícito), esse operador não só compara se os valores são idênticos, como também compara se os tipos de dado também são iguais.
*/

//Vejamos alguns exemplos:

//CONVERSÃO IMPLÍCITA DO JAVASCRIPT:
let valorString = '5'
let valorNumber = 5
console.log('1)', valorString == valorNumber) //Note que a resposta será "true" por que a conversão implícita transforma o valor number em string antes de comparar, e como o "==" só compara valores e não tipos de dados ele gerará um valor "true"...



//CONVERSÃO EXPLÍCITA DO JAVASCRIPT:
let valorString2 = '5'
let valorNumber2 = 5
console.log('\n2)', Number(valorString2) === valorNumber2) //Note que a resposta será "true" por que fizemos uma conversão explícita transformando o valor string em number antes de fazer a comparação com "===", que irá comparar tanto valor quanto tipo de dado...
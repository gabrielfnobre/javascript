//EARLY RETURN:

//O early return "retorno antecipado" é uma técnica usada para quando temos um desvio condicional que não atende uma determinada condição que desejamos, e queremos que o fluxo de execução da função seja interrompido, em vez de permitir que todo o código seja executado sem necessidade.

//É uma solução elegante, torna o código mais limpo e agradável. Veja como podemos utilizá-la:

let funcaoEntre1e10 = (value) => {
    if(value == 0) return //O método de utilização é exatamente esse, numa única linha temos a condicional que não queremos que seja atendida, se por um acaso ela for, forçamos a execução de um return para que o restante da função nem seja lido...
    
    console.log('passou pelo 1º if')
    if (value < 0) return //Note que se a primeira não for satisfeita ela segue para a próxima, que se não for atendida também, irá sair do código...
    
    console.log('passou pelo 2º if')
    if (value > 10) return
    
    console.log('passou pelo 3 if')
    return "O valor está entre 1 e 10"
}

console.log(funcaoEntre1e10(0))
/*RESULTADO NO CONSOLE:
undefined
*/

console.log(funcaoEntre1e10(-1))
/*RESULTADO NO CONSOLE:
passou pelo 1º if
undefined
*/

console.log(funcaoEntre1e10(11))
/*RESULTADO NO CONSOLE:
passou pelo 1º if
passou pelo 2º if
undefined
*/

console.log(funcaoEntre1e10(1))
/*RESULTADO NO CONSOLE:
passou pelo 1º if
passou pelo 2º if
passou pelo 3 if
O valor está entre 1 e 10
*/

console.log(funcaoEntre1e10(10))
/*RESULTADO NO CONSOLE:
passou pelo 1º if
passou pelo 2º if
passou pelo 3 if
O valor está entre 1 e 10
*/


//CHAMANDO OS ATRIBUTOS NODE EM CACHE:
//Perceba que estamos instanciando o mesmo atributo em variáveis diferentes...
const contadorNodeComum1 = require('./137-Instanciacao_Server_Comum')
const contadorNodeComum2 = require('./137-Instanciacao_Server_Comum')
contadorNodeComum1.inc() 
contadorNodeComum1.inc()
//Veja que mesmo incrementando os valores da variável 1, o valor da variável 2 também foram incrementados...

console.log('Veja que os 2 valores foram incrementados:', contadorNodeComum1.valor, contadorNodeComum2.valor)



//CHAMANDO OS VALORES DO MÓDULO INSTANCIADO POR ATRAVÉS DE UMA FACTORY...
const contadorFactory1 = require('./137-Instanciacao_Server_Factory')() //Detalhe importante, quando usamos o factory é que temos que chamar a função no momento da chamada do require adicionando os () de chamada da função factory...
const contadorFactory2 = require('./137-Instanciacao_Server_Factory')()
contadorFactory1.inc()
contadorFactory1.inc()

console.log('Veja que só o valor da variável 1 foi incrementado:', contadorFactory1.valor, contadorFactory2.valor)
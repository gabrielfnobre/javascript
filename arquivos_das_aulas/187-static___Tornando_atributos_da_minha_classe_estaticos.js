//STATIC:

//Quando nós desejamos ter um atributo estático - um atributo que exista somente dentro da minha classe e ele seja idêntico para todas as instâncias que criarmos dentro de uma classe - usamos a palavra reservada static.

//Vamos ver 2 situações onde possivelmente desejamos que esse tipo de comportamento aconteça:

//QUANDO QUEREMOS ACUMULAÇÃO DE VALOR:
//No exemplo abaixo queremos que o número de clientes seja acumulado á cada instância criada para que possamos saber o número total de instâncias numa classe:

class Client {
    static numeroCliente = 0 //A forma de criar um atributo estático é dentro da própria classe usando a palavra reservada "static"

    constructor(nome, rg){
        this.nome = nome
        this.rg = rg
        Client.numeroCliente += 1 //Note que á cada chamada de uma nova instância nós acumulamos o valor para o atributo estático. Perceba também que a forma de chamarmos um atributo estático é diferente, não chamamos em relação as instâncias criadas, e sim em relação á classe, pois todo atributo estático pertence as classes e não as instâncias.
    }
}

//Veja que temos 2 clientes criados...
let gustavo = new Client('Gustavo', '123.456.789-1')
let lilian = new Client('Lilian', '123.456.789-1')
console.log(gustavo)
/*RESULTADO NO CONSOLE:
Client { nome: 'Gustavo', rg: '123.456.789-1' }
*/
console.log(lilian)
/*RESULTADO NO CONSOLE:
Client { nome: 'Lilian', rg: '123.456.789-1' }
*/

console.log(Client.numeroCliente)
/*RESULTADO NO CONSOLE:
2
*/



//QUANDO QUEREMOS QUE UM MESMO VALOR SE REPITA EM TODAS AS INSTÂNCIAS:
//Aqui fizemos uma herança entre a classe cliente e a classe agência, onde desejamos que todos os clientes pertençam a mesma agência, ou seja, queremos um valor estático que se repita em todas as instâncias...

class Agency extends Client {
    static numeroAgencia = 25415-4 //Geração do atributo estático...

    constructor(nome, rg, numAgencia = Agency.numeroAgencia){ //Atribuição do valor estático...
        super(nome, rg)
        this.numAgencia = numAgencia
    }
}

//Perceba que o número da agência se repete em todas as intâncias
let romeu = new Agency('Romeu', '789.456.123-7')
let rafaela = new Agency('Rafaela', '789.456.123-7')
console.log(romeu)
/*RESULTADO NO CONSOLE
Agency { nome: 'Romeu', rg: '789.456.123-7', numAgencia: 25411 }
*/
console.log(rafaela)
/*RESULTADO NO CONSOLE
Agency { nome: 'Rafaela', rg: '789.456.123-7', numAgencia: 25411 }
*/
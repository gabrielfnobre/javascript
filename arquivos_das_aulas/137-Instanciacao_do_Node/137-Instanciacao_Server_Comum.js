//INSTANCIALIZAÇÃO DO NODE:

//No Node, toda vez que criamos um novo objeto por através do "module.exports", nos deparamos com um determinado comportamento que é a criação e uma única instância para aquele objeto. Isso significa que, se nós tentarmos referenciar um determinado objeto existente dentro de um módulo, mesmo que criemos mais de uma variável chamadora para ele, vamos estar referenciando ao mesmo objeto, que será contido no mesmo espaço de memória.

//Isso acontece por causa do cache do Node, que armazena os valores em cache para cada instância.

//Esse é um assunto que devemos tomar cuidado, pois quando o assunto é instancialização, qualquer alteração nos valores de memória pode causar um resultado inesperado. Vejamos um exemplo logo abaixo...

//EXEMPLOS DE VALORES ARMAZENADOS EM CACHE:
module.exports = { //Perceba que criamos 2 objetos, onde um possuí o valor 1, e o outro é uma função que incrementa esse valor, caso a função de incremento seja chamada, o atributo "valor" será incrementado e vai mudar, passando de 1 para 2 e assim por diante quantas vezes ele for chamado durante a execução do programa, pois seus valores serão armazenados em cache...
    valor: 1, 
    inc() {
        this.valor++
    }
}


//Para ver o incremento da instancialização na prática acesse a aula 137-Instanciacao_Client.js
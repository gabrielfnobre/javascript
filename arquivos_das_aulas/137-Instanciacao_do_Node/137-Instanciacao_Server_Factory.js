//INSTANCIAÇÃO FACTORY:

//Podemos resolver o problema da instancia única do Node por gerar objetos dentro de uma função factoty, lembrando que funções factory criam novos objetos para cada execução, fazendo com que um atributo seja chamado á partir de um único valor de instancia, invés de referenciar ao mesmo valor...

//CRIAÇÃO DE FUNÇÃO FACTORY DENTRO DE UM MODULE.EXPORTS:
module.exports = () => { //Perceba que dentro do module.exports temos uma factory que irá criar um objeto novo para cada variável que chamar o atributo valor, invés de pegar os valores de uma instância que já existe...
    return {
        valor: 1, 
        inc() {
            this.valor++
        }
    }
}

//Para ver como que a instanciação única por através da factory funciona acesse a aula "137-Instanciacao_Client.js"
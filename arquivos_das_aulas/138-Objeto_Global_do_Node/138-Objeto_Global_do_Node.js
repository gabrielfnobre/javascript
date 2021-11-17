//OBJETO GLOBAL DO NODE:

//O Node possuí um objeto global que corresponde a toda a camada maior do Node, assim como o Window é o objeto global do browser.

//Geralmente preferimos não utilizar a camada global do Node, tendo em vista o risco de se ter objetos armazenados globalmente e do impacto negativo que podemos ter ao manipular objetos que estão dentro do contexto global, até por isso foi criamos o sistema de módulos, para que pudéssemos encapsular a utilização das nossas variáveis dentro de módulos invés de deixá-las soltas dentro do objeto global.

//Porém, em raras excessões vamos preferir utilizar o objeto global do Node quando desejarmos fazer uma atribuição geral a nossa aplicação.

//OBSERVAÇÕES: O que pode ser feito para mudar a facilidade de modificação dos valores de um objeto global é a utilização do freeze(), onde congelamos os valores dos objetos á ponto deles não poderem ser modificados á partir de um arquivo externo que instanciou o objeto.

//Abaixo temos a declaração de variáveis dentro do contexto global, ao importar esse arquivo você notará que ele estará disponível para qualquer aplicação e inclusive poderá até ser modificado...
global.minhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Global'
}

//Para ver como o global se comporta acesse a aula 138-Objeto_Global_Client.js
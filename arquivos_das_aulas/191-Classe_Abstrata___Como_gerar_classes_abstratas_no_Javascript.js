//CLASSE ABSTRATA:

//O javascript não é uma linguagem fortemente tipada e nem totalmente orientada a objetos, isso acaba permitindo que certos fatores do Encapsulamento acabem não se aplicando ao javascript, e um desses fatores é o da classe abstrata.

//Só para relembrar, uma classe abstrata é aquela que NÃO DEVE SER INSTANCIADA, ela foi criada com o único objetivo de ser herdada por outras classes.

//Mas o Javascript não proíbe a instanciação de uma classe mãe diretamente, por isso precisamos de usar um certo macete da linguagem para evitar que classes sejam instanciadas, vejamos como:

//FORÇANDO UM CLASSE A SER ABSTRATA:
class Pessoa {
    constructor(nome, idade){ //Veja que dentro do construtor fazemos uma comparação onde, se o objeto chamador for a
        if(this.constructor == Pessoa){ //classe Pessoa, ele executa uma chamada de erro e pára a execução do código...
            throw new Error('Essa classe não pode ser instanciada, é uma classe abstrata, tente a classe Funcionario')
        }
        this.nome = nome
        this.idade = idade
    }
}

class Funcionario extends Pessoa{
    constructor(nome, idade, profissao){
        super(nome, idade)
        this.profissao = profissao
    }
}

let nascimento = new Pessoa('Nascimento', 54)
/*RESULTADO NO CONSOLE:
191-Classe_Abstrata___Como_gerar_classes_abstratas_no_Javascript.js:13
            throw new Error('Essa classe não pode ser instanciada, é uma classe abstrata, tente a classe Funcionario')
                  ^

Error: Essa classe não pode ser instanciada, é uma classe abstrata, tente a classe Funcionario
*/

let ricardo = new Funcionario('Ricardo', 54, 'Expedicao')
console.log(ricardo)
/*RESULTADO NO CONSOLE:
Funcionario { nome: 'Ricardo', idade: 54, profissao: 'Expedicao' }
*/
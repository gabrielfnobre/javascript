//MÉTODO ABSTRATO:

//O javascript não é uma linguagem fortemente tipada e nem totalmente orientada a objetos, isso acaba permitindo que certos fatores do Encapsulamento acabem não se aplicando ao javascript, e um desses fatores é o dos métodos abstratos.

//Só para relembrar, um método abstrato é aquela que SEMPRE DEVERÁ SER SOBRESCRITO PELAS CLASSES FILHA, eles são criados com o único objetivo de ser herdados por outras classes, onde cada classe irá sobrescrevê-lo á sua maneira.

//Mas o Javascript não proíbe que você possa chamar métodos abstratos diretamente, por isso precisamos de usar um certo macete da linguagem para evitar que métodos abstratos sejam executados, vejamos como:

//FORÇANDO UM MÉTODO A SER ABSTRATO:
class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    detalhes(){ //Aqui temos o exemplo de um método abstrato, utilizamos o throw Error para lançar uma mensagem de erro
        throw new Error(`Atenção! Esse método é abstrato, não deve ser chamado!`) //caso alguém tente executar o método
    }                                                                               //abstrato diretamente.

    _detalhes(){ //Aqui já temos o exemplo de um método não abstrato que poderá ser acessado pelas classes filhas...
        return `Nome: ${this.nome} | Idade: ${this.idade}`
    }
}

class Funcionario extends Pessoa{
    constructor(nome, idade, profissao){
        super(nome, idade)
        this.profissao = profissao
    }

    detalhes(){ //Perceba que sobrescrevemos o método "detalhes" da classe mãe criando o nosso próprio modelo de método
        return `Profissão: ${this.profissao} | ${this._detalhes()}` //e ele ainda por cima chama o método "_detalhes" 
    }                                                               //que nós não adequamos para ser abstrato...
}

let nascimento = new Pessoa('Nascimento', 54)
console.log(nascimento.detalhes()) //Perceba que quando tentamos chamar o método abstrato não vamos conseguir...
/*RESULTADO NO CONSOLE:
192-Metodos_Abstratos___Como_gerar_metodos_abstratos_no_Javascript.js:17
        throw new Error(`Atenção! Esse método é abstrato, não deve ser chamado!`)
              ^

Error: Atenção! Esse método é abstrato, não deve ser chamado!
*/

let ricardo = new Funcionario('Ricardo', 54, 'Expedicao')
console.log(ricardo.detalhes()) //Mas quando chamamos o método sobrescrito conseguimos sem dificuldade...
/*RESULTADO NO CONSOLE:
Profissão: Expedicao | Nome: Ricardo | Idade: 54
*/
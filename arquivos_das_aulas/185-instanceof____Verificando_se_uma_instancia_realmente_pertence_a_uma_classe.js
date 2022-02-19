//INSTANCEOF:

//A palavra reservada "instanceof" é usada para quando desejamos verificar se um objeto realmente é uma instância de uma determinada classe. Retornando "true" ou "false".

//Geralmente usamos o "instanceof" para fazer validação de entrada de dados nos nossos sets, onde só permitimos que um determinado set modifique os valores de uma instância se essa instância realmente permitir a uma determinada classe.

//Vejamos alguns exemplos:
//Temos aqui uma classe que pega nome e idade dos alunos...
class Aluno {
    constructor(nome, idade){
        this._nome = nome
        this._idade = idade
    }
}

//... e temos uma classe para as turmas que precisa de pegar os alunos que já estiverem instanciados na classe Aluno, por isso vamos usar o "instanceof" para verificar se um aluno já foi instanciado...
class Turma_A {
    constructor(aluno, nota){
        if (aluno instanceof Aluno){
        this.aluno = aluno //Note que aluno só é instanciado se o instance of der "true", caso contrário é emitida uma 
        } else {            //mensagem de que o aluno não foi instanciado na classe Aluno ainda...
            console.log('Esse aluno(a) ainda não é uma instância da classe Aluno')
        } 
        this.nota = nota
    }
}

//Note que o aluno 1 foi instanciado na classe "Aluno" e depois na classe "TurmaA"...
let aluno_0001 = new Aluno('Gabriel', 30)
console.log(aluno_0001)
/*RESULTADO NO CONSOLE:
Aluno { _nome: 'Gabriel', _idade: 30 }
*/

let turmaAAluno_001 = new Turma_A(aluno_0001, 10)
console.log(turmaAAluno_001)
/*RESULTADO NO CONSOLE:
Turma_A { aluno: Aluno { _nome: 'Gabriel', _idade: 30 }, nota: 10 }
*/

//Porém a aluna "Graziela" ainda não foi instanciada na classe Aluno, fazendo com que a mensagem de aviso aparecesse no console...
let aluno_002 = 'Graziela'
let turmaAAluno_002 = new Turma_A(aluno_002, 10)
/*RESULTADO NO CONSOLE:
Esse aluno(a) ainda não é uma instância da classe Aluno
*/

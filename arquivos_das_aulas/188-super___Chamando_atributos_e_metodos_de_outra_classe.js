//SUPER:

//A função "super()" do javascript é uma função que utilizamos para herdar atributos e métodos de uma classe extendida para a classe atual.

//Veja como podemos usá-la:

//Temos uma classe aqui que define nome e sexo de uma pessoa e possuí uma função que pode retorná-los:
class Pessoa {
    constructor(nome, sexo){
        this.nome = nome
        this.sexo = sexo
    }

    setPessoa(){
        console.log(
        `
        ${this.nome}
        ${this.sexo}
        `
        )
    }
}

//E uma classe Profissão que se aproveita dos dados da classe pessoa e ainda acrescenta a profissão da pessoa.
class Profissao extends Pessoa{
    constructor(nome, sexo, profissao){ //os parâmetros são os mesmos de Pessoa e ainda recebe mais 1 para a profissão...
        super(nome, sexo) //O super faz com que os atributos de Pessoa sejam herdados 
        this.profissao = profissao
    }

    setFuncionario(){ //Veja que podemos referenciá-los normalmente...
        console.log(
        `
        ${this.nome}
        ${this.profissao}
        ${this.sexo}
        `)
    }
}

//Veja que Paulo pode usar os atributos e métodos de ambas as classes:
let paulo = new Profissao('Paulo', 'Masculino', 'Pedreiro')
paulo.setFuncionario() 
/*RESULTADO NO CONSOLE:
Paulo
Pedreiro
Masculino
*/

paulo.setPessoa()
/*RESULTADO NO CONSOLE:
Paulo
Masculino
*/

console.log(paulo)
/*RESULTADO NO CONSOLE:
Profissao { nome: 'Paulo', sexo: 'Masculino', profissao: 'Pedreiro' }
*/

//POLIMORFISMO ENTRE CLASSES FILHAS:

//Na lição 189 vimos o polimorfismo de sobrecarga e de sobrescrita. Mas o polimorfismo também acontece entre as classes mãe e filha, quando temos instâncias que podem ser geradas á partir e classes de que herdam atributos e métodos de uma única classe mãe, isso também pode ser entendido como polimorfismo, vamos ver alguns exemplos disso:

class Funcionario { //Temos uma única classe mãe...
    constructor(nome, id){
        this._nome = nome
        this._id = id
    }

    _mostraDados(){
        return `Nome: ${this._nome} | ID: ${this._id}`
    }
}

class Gerente extends Funcionario { //Uma 1ª classe Filha...
    constructor(nome, id){
        super(nome, id)
        this._cargo = 'Gerente' //Muda só o cargo...
    }

    mostraDados(){
        return `${this._mostraDados()} | Cargo: ${this._cargo}`
    }
}

class Operario extends Funcionario { //E uma 2ª classe Filha...
    constructor(nome, id){
        super(nome, id)
        this._cargo = 'Operario' //Muda também o cargo
    }

    mostraDados(){
        return `${this._mostraDados()} | Cargo: ${this._cargo}`
    }
}

let gabriel = new Operario('Gabriel', '0000') //Tanto a classe "Operario" quanto "Gerente" herdam o "nome" e "id", mas
console.log(gabriel.mostraDados())              //apresentam resultados diferentes nos cargos, ou seja, aconteceu um
/*RESULTADO NO CONSOLE:                         //Polimorfismo...
Nome: Gabriel | ID: 0000 | Cargo: Operario
*/

let renan = new Gerente('Renan', '1000')
console.log(renan.mostraDados())
/*RESULTADO NO CONSOLE:
Nome: Renan | ID: 1000 | Cargo: Gerente
*/

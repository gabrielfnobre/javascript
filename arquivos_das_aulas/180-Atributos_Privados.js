//ENCAPSULAMENTO:

//Não é segredo para ninguém que o javascript não trabalha muito bem com encapsulamento de atributos no POO, mas existem alguns métodos que podem tornar o código mais seguro, e convenções que devem ser seguidas visando o encapsulamentos dos nossos atributos.

//----------------------------------------------------------------------------------------------------------------------
//CONVENÇÃO PARA ATRIBUTOS PRIVADOS UNDERLINE:
class PrivadosPorConvencao {
    constructor(nome, idade){
        this._nome = nome //Por convenção coloca-se o underline em atributos privados embora isso não impeça em nada que os atributos fiquem á mostra...
        this._idade = idade
    }
}

let pessoa_01 = new PrivadosPorConvencao('Gabriel', 30)
console.log(pessoa_01)
/*RESULTADO NO CONSOLE:
PrivadosPorConvencao { _nome: 'Gabriel', _idade: 30 }
 */



//----------------------------------------------------------------------------------------------------------------------
//CONVENÇÃO PARA ATRIBUTOS PRIVADOS HASHTAG:
class PrivadosPorConvencaoHashTag {
    constructor(nome, idade){
        this.#nome = nome //Por convenção coloca-se também o hashtag em atributos privados, diferente do underline o # já funciona em algumas IDEs e navegadores para impedir que um atributo seja visualizado de fora da classe sem que um método específico torne isso possível...
        this.#idade = idade
    }
}

let pessoa_02 = new PrivadosPorConvencaoHashTag('Gabriel', 30)
console.log(pessoa_02)
/*RESULTADO NO CONSOLE:
SyntaxError: Private field '#nome' must be declared in an enclosing class
 */
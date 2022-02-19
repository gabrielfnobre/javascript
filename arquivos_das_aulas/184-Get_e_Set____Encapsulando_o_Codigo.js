//GET E SET:

//Usamos métodos get e set para encapsular o nosso código, fique atento a quando usar e as maneiras de usar:

//      - get: só para quando desejamos visualizar mas não alterar o atributo privado;
//      - set: para quando desejamos alterar o atributo privado;

class Animal {
    constructor(nome, especie, falar){
        this._nome = nome
        this._especie = especie
        this._falar = falar
    }

    //Perceba que adicionamos um get para visualizar todos os atributos privados:
    get nome() {return this._nome}
    get especie() {return this._especie}
    get falar(){return `${this.nome} está ${this._falar}`}

    //E um set para modificar o nome se for necessário:
    set mudarNome(nomeNovo) {this._nome = nomeNovo}
}

//Instanciamos um cachorrinho mas esquecemos de colocar o nome dele:
let fernando = new Animal('', 'cachorro', 'latindo')

//Note que podemos visualizar os atributos sem problemas, um detalhe importante, quando usamos "get" ou "set" não precisamos usar os parênteses de chamada da função, por que eles são métodos especiais:
console.log(fernando.nome)
/*RESULTADO NO CONSOLE: 
//O nome aparece em vazio por que esquecemos de colocar...
*/

console.log(fernando.especie)
/*RESULTADO NO CONSOLE: 
cachorro
*/

console.log(fernando.falar)
/*RESULTADO NO CONSOLE: 
 está latindo //Era para aparecer o nome do cachorrinho mas como não colocamos ele fica em vazio...
*/


//Note agora que para mudar o nome do cachorrinho somos obrigados a cessar o nome dele por através do "set", para isso usamos o método de acesso "mudarNome", note que modo de acesso é totalmente diferenciado, não usamos os parênteses de chamada de função, isso iria ocasionar um erro. O modo de utilizar é por através de uma atribuição...
fernando.mudarNome = 'Fernando'
console.log(fernando.nome)
/*RESULTADO NO CONSOLE: 
Fernando
*/

console.log(fernando.falar)
/*RESULTADO NO CONSOLE: 
Fernando está latindo
*/

//Aqui testamos um método que vai dar errado, por que o set não pode usar os parênteses de chamada da função:
fernando.mudarNome('Ronaldinho')
/*RESULTADO NO CONSOLE:
file:///c:/Users/Almoxarifado/Documents/javascript/arquivos_das_aulas/184-Get_e_Set____Encapsulando_o_Codigo.js:51
fernando.mudarNome('Ronaldinho')
         ^

TypeError: fernando.mudarNome is not a function
//Note que aparece que a função "mudarNome" não está definida, isso por que ela é um método set...
*/


//Veja que aqui estamos tentando modificar o nome do cachorrinho diretamente pelo get, mas não é possível...
fernando.nome = 'Ronaldinho'
/*RESULTADO NO CONSOLE: 
file:///c:/Users/Almoxarifado/Documents/javascript/arquivos_das_aulas/184-Get_e_Set____Encapsulando_o_Codigo.js:68
fernando.nome = 'Ronaldinho'
              ^

TypeError: Cannot set property nome of #<Animal> which has only a getter
A mensagem de erro mostra que não é possível modificar um atributo que está no método "get"...
*/

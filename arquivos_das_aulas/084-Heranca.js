//HERANÇA:
//O conceito de herança em Javascript é semelhante ao conceito de herança nas demais linguagens de programação. Porém a maneira como a herança funciona no Javascript é totalmente diferente.
//Como sabemos, todo objeto em Javascript pertence a função interna Object do Javascript. E como uma função construtora, Object possuí propriedades, uma delas é o "prototype", essa propriedade é responsável por referenciar a um determinado objeto pai.
//Object é a função môr de todos os objetos, ou seja, ela não pode ter um pai, ela é o pai de todos, por isso, qualquer objeto criado á partir dele terá o Object como seu prototype.
//E isso vai acontecendo de função construtora para função construtora, por exemplo, se temos um objeto pai e desejamos criar um objeto filho que herde algumas características do pai, o objeto filho terá como prototype os atributos da função pai, e o pai por sua vez terá como prototype os atributos da função avô, e isso vai acontecendo até que chegue a função Object que é o último na lista de prototypes.
//Entender essa sequência de filiações é importante para saber referenciar heranças em Javascript.
//O prototype é uma propriedade privada do Object, por isso, para referenciá-la devemos usar o método de acesso: .__proto__
//Mas cuidado para não confundir, a propriedade [[prototype]] utilizada nas heranças de objetos é totalmente diferente da propriedade "prototype" que existe nas funções, uma coisa não tem a ver com a outra.
//OBS: Quando o assunto é Javascript, é sempre melhor priorizar o uso de composição no lugar de herança.

//ATRIBUTO PROTOTYPE DE OBJETC ESTÁ PRESENTE EM QUALQUER OBJETO:
const teste = {atributo: 'oi'} //Perceba que temos um objeto comum
console.log('\n1)', teste.__proto__ === Object.prototype) //Ao fazer a comparação entre o seu prototype e o de Object temos o mesmo prototype...



//OBJECT NÃO POSSUÍ UM PROTOTYPE SUPERIOR A ELE:
console.log('\n2)', Object.prototype.__proto__) //Veja que o resultado é null, pois Object não possuí um prototype superior...



//UMA FUNCTION GERA UM PROTOTYPE PRÓPRIO DELA:
const funcao = () => {} //Perceba que o prototype de uma função é diferente do prototype do Object...
console.log('\n3)', funcao.prototype === Object.prototype)



//ATRIBUÍNDO PROTÓTIPOS SOBRE UMA CADEIA DE OBJETOS QUE HERDA UM DO OUTRO:
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'} //Perceba que atribuímos todos os atributos de avo em pai literalmente usando o __proto___
const filho = {__proto__: pai, attr3: 'C'} //Fizemos o mesmo em filho, onde filho herda os atributos de pai, e ainda por cima herda todos os atributos que o pai herdou de avo.



//VENDO HERANÇA ACONTECER DE ELEMENTO FILHO PARA ANCESTRAL:
console.log('\n4)', filho.attr1) //Perceba que existe uma herança onde filho procura pelo atributo attr1, ao não encontrar procura no protótipo dele que é pai, ao nao encontrar procura no protótipo de pai que é "avô", por ter encontrado no avô ele retorna a busca com o resultado do valor do atributo...



//VENDO QUE SE UM OBJETO HERDEIRO NÃO ENCONTRAR UM ELEMENTO NO ÚLTIMO ANCESTRAL ELE PROCURA NO OBJECT
Object.prototype.attr0 = 'Z' //Veja que atribuímos um atributo diretamente sobre o Object, com o valor 'Z'
console.log('\n5)', filho.attr0) //Por não encontrar o atributo nem em pai e nem em avo, ele procura no Object...



//SHADOWING NA HERANÇA:
//O shadowing é um princípio que acontece na herança quando temos um atributo com o mesmo nome em objetos diferentes dentro de uma mesma cadeira de heranças, nesse caso, o objeto herdeiro irá referenciar ao elemento mais próximo dele na cadeia...
const rei = {cabelo: 'preto', olhos: 'castanhos'}
const principe = {__proto__: rei, cabelo: 'loiro'} //Perceba que o príncipe herda os atributos do rei, mas o cabelo dele sobrescreve o atributo cabelo para "loiro", isso que acabou de acontecer é o shadowing...
const futuroPrincipe = {__proto__: principe}
console.log('\n6)', futuroPrincipe.cabelo, futuroPrincipe.olhos) //Quando puxamos os atributos do futuroPrincipe, ele herda o cabelo loiro do pai por causa do shadowing, mas os olhos ele herda do seu avo...



//ATRIBUINDO HERANÇA DE PROTOTYPE NO FORMATO MAIS MODERNO DO ECMASCRIPT 2015:
//O formato de herança mais moderno do ECMA Script 2015 trouxe a função "setPrototypeOf()", usar essa função é mais indicado do que utilizar o método literal utilizando o método __proto__, um método que não é suportado se o usuário estiver usando um browser muito antigo...
const carro = { //Perceba que temos um objeto carro que possuí atributo para...
    velMax: 200, //Velocidade máxima, com o padrão de 200Km/h...
    velAtual: 0, //Velocidade atual comb o padrão e 0...
    aceleraMais(delta) { //Uma função que pega o this atual dela e compara com a velocidade máxima para não deixar ultrapasar
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {//E uma função de status que mostra qual a velocidade em que o carro está e quanto ele pode atingir...
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}

//Criamos um objeto ferrari que irá herdar os atributos de métodos de carro, porém, irá sobrescrever o atributo "velMax" assim que a prototipação acontecer...
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

//Temos também um objeto volvo que vai sobrescrever somente o método status do objeto carro quando a prototipação acontecer...
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`//Perceba 2 coisas aqui:
        //1º: lembre-se que o objetivo da criação desse método é sobrescrever o já existente no protótipo de carro, então, assim que a herança acontecer, o this irá referenciar ao próprio objeto volvo, que será o this da vez.
        //2º: estamos usando "super" para chamar o próprio status do protótipo, que é o método status do objeto carro. Sempre que usarmos super, vamos referenciar ao elemento pai em uma herança, e não ao objeto chamador. Se colocássemos "this" aqui teríamos um estouro de pilha, pois ele iria chamar ao próprio status do volvo infinitamente... 
    }
}

Object.setPrototypeOf(ferrari, carro) //Aqui temos a prototipação de fato com a função "setPrototypeOf()", onde colocamos sempre o objeto que desejamos que ser o herdeiro, e depois o objeto que desejamos que tenha seus elementos herdados...
Object.setPrototypeOf(volvo, carro)

//Veja como a herança ocorreu corretamente entre os objetos e o objeto pai "carro"
ferrari.aceleraMais(300)
console.log('\n7)', ferrari.status())

volvo.aceleraMais(180)
console.log('\n8)', volvo.status()) //Veja como o método status causou uma sobrescrita sobre o status do objeto pai "carro"
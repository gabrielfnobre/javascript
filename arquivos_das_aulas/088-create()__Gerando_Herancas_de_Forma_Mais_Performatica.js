//CREATE():
//O método "create()" é mais um método da função "Object" usado para gerar herança de forma mais performática dentro do javascript, por através dele podemos gerar uma herança, atribuir valores as chaves e ainda mexer nas propriedades de chaves das nossas heranças num único método.
//Vejamos como utilizá-lo:

//USANDO OBJECT.CREATE() PARA GERAR HERANÇA:
//Outra forma de gerar herança é usando o método "create()" da função Object, da seguinte forma:
const paiCreate = {nome: 'João', cabelo: 'Preto'} //Temos um objeto pai...
const filhaCreate = Object.create(paiCreate) //E criamos um novo objeto para filha, onde o Object.create recebe como parâmetro o nome do objeto que desejamos herdar...
console.log('\n1)', filhaCreate.nome, filhaCreate.cabelo) //Veja que a herança já aconteceu, os atributos foram herdados, mas ele está em vazio por que o create() só permite que um objeto herde as chaves, ele não permite que valores sejam passados entre o elemento pai e o elemento filho...

filhaCreate.nome = 'Ana' //Agora sim nós passamos valores para as chaves...
filhaCreate.cabelo = 'Loiro'
console.log('1)', filhaCreate.nome, filhaCreate.cabelo) //E eles vão receber normalmente os valores como podemos ver no console...



//ATRIBUINDO VALORES DIRETAMENTE NO OBJECT.CREATE E AINDA MEXENDO NAS PROPRIEDADES:
//É possível atribuir valores a um objeto filho assim que usamos o método create(), e ainda por cima, podemos alterar as propriedades de chave desse elemento...
const filhaCreate2 = Object.create(paiCreate, { //Veja que podemos atribuir valores as chaves herdadas abrindo um objeto dentro do campo de parâmetros do método create e colocando as chaves, seus valores, se podem ser sobrescritos e sua visibilidade...
    nome: {value: 'Rafaela', writable: false, enumerable: true}
})
filhaCreate2.nome = 'Carla' //Perceba que, como colocamos que a chave nome não pode ser sobrescrita, não podemos fazer a mudança de nome...
console.log('\n2)', filhaCreate2.nome, filhaCreate2.cabelo) //Perceba que os valores das chaves só ficam visíveis quando declaramos valores para elas...
console.log('2)', Object.keys(filhaCreate2)) //Apesar de ter o atributo cabelo herdado, para o javascript é como se o objeto filhaCreate2 tivesse somente a chave "nome dentro dela..."
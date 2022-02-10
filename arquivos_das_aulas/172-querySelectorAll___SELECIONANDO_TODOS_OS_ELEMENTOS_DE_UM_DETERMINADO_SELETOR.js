//querySelectorAll
/*
    A função "querySelectorAll()" é uma função do escopo "document" usada para quando desejamos selecionar todos os elementos HTML que possuam um mesmo seletor, para fazer algum tipo de operação javascript sobre todos esses elementos.

    O resultado dessa função é retornar um array chamado "NodeList, com todos os elementos, partindo do índice "0" até o "último elemento."

    É importante saber que uma vez usado o querySelectorAll ele vai retornar o caminho completo de um elemento HTML com o seu "document", por isso não é preciso referenciar o "document" ou usar "querySelector" para captar o seletor novamente, todos esses valores já estão guardados no array, é só referenciar o índice e acrescentar as execuções javascript.
*/

//FAZENDO TODOS OS BOTÕES TEREM O MESMO COMPORTAMENTO...
//Queremos que todos os botões façam o quadrado na imagem se mover para frente:

//Esse é o instante em que o "querySelectorAll" é usado, os valores deles são armazenados dentro de uma variável que possuí um array dos elementos...
let valores = document.querySelectorAll(".mover")
let acu = 100 //O acumulador vai guardar a soma de valores para fazer o quadrado ir para frente...

//Função para fazer o quadrado ir para frente e a variável "acu" acumular...
let mova = () => {
    document.querySelector('#quadrado').style.marginLeft = `${acu}px`
    acu += 100
}

//Veja que iteramos sobre o array onde os elementos estão armazenados...
for(let value of valores)
    value.onclick = mova //Perceba que não usamos "document" nem "querySelector", só acrescentamos a cada elemento o evento onclick com a função "mova()"

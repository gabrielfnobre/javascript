//ENTRIES():
//A função built-in "entries()" é usada em objects para retornar os chaves e valores dessas chaves que existem num objeto...
//Em resposta entries() sempre retornará um array com pares de chave e valor, onde cada chave e valor virá dentro de um array...
//Veja como usá-la...

const pessoa = {
    nome: 'Gabriel', 
    idade: 30,
    peso: 95
}

console.log(Object.entries(pessoa)) //Veja que para utilizá-la temos que usar o Object antes, seguido pela built-in "entries()"
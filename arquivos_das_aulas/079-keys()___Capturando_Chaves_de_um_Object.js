//KEYS():
//A função built-in "keys()" é usada em objects para retornar os nomes das chaves que existem num objeto...
//Em resposta keys() sempre retornará um array com todas as chaves dentro dele...
//Veja como usá-la...

const pessoa = {
    nome: 'Gabriel', 
    idade: 30,
    peso: 95
}

console.log(Object.keys(pessoa)) //Veja que para utilizá-la temos que usar o Object antes, seguido pela built-in "keys()"
//VALUES():
//A função built-in "values()" é usada em objects para retornar os valores das chaves que existem num objeto...
//Em resposta values() sempre retornará um array com todas os valores dentro dele...
//Veja como usá-la...

const pessoa = {
    nome: 'Gabriel', 
    idade: 30,
    peso: 95
}

console.log(Object.values(pessoa)) //Veja que para utilizá-la temos que usar o Object antes, seguido pela built-in "values()"
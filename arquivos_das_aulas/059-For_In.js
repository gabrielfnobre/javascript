//FOR/IN:
//O for/in é uma estrutura de repetição especificamente criada para percorrer elementos container como os arrays e os objetos, veja como:

//FOR/IN PARA PERCORRER ARRAY:
const array = [1, 2, 3, 4, 5];
for (let i in array) { //veja a facilidade, basta usar o for in dando a um nome a uma variável qualquer e o usando a palavra reservada "in" que conseguimos percorrer todos os índices de um array...
    console.log(array[i]);
}



//FOR/IN PARA OBJETOS:
const pessoa = {
    nome: 'Gabriel',
    idade: 30,
    peso: 98,
    altura: 1.83
}
console.log('\n');
for (let atributo in pessoa) { //Veja a facilidade, podemos criar uma variável qualquer dentro dos parâmetros do for in e vamos conseguir capturar todos os valores á partir das suas chaves...
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
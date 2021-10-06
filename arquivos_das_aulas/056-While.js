//WHILE:
//Uma estrutura de repetição para quando temos um número indeterminado de repetições...

//USANDO UMA ESTRUTURA DE REPETIÇÃO WHILE, JUNTAMENTE COM UMA FUNÇÃO ALEATORIA:
function aleatorio(min, max) { //Função aleatória que tem a missão de iterar até que a condição de while seja satisfeita...
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

let i = 0; //variável que irá coletar o valor desejado que no caso é 10...
let contador = 0; //variável contadora, que vai nos mostrar quantas vezes while teve de iterar até chegar no 10...

while (i != 10){
    i = aleatorio(0, 10);
    console.log(i);
    contador++;
}

console.log(`Parabéns você conseguiu chegar no 10, para isso o while teve que iterar ${contador} vezes!`);
//DO WHILE:
//Uma estrutura de repetição para quando temos um número indeterminado de repetições, mas queremos fazer a iteração pelo menos 1 vez...

//USANDO UMA ESTRUTURA DE REPETIÇÃO DO WHILE, JUNTAMENTE COM UMA FUNÇÃO ALEATORIA:
function aleatorio(min, max) { //Função aleatória que tem a missão de iterar até que a condição de while seja satisfeita...
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

let i = 10; //variável que irá coletar o valor desejado que no caso é 10, mas perceba que ela já começa com 10, mas como ela provavelmente será trocada ao passar pela função aleatório, ela vai pelo menos 1 vez entrar na estrutura de repetição, o que não aconteceria no while, visto que a condicional fica no início do bloco...
let contador = 0; //variável contadora, que vai nos mostrar quantas vezes do while teve de iterar até chegar no 10...

do {
    i = aleatorio(0, 10);
    console.log(i);
    contador++;
} while (i != 10)

console.log(`Parabéns você conseguiu chegar no 10, para isso o do while teve que iterar ${contador} vezes!`);
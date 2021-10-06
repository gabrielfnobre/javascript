//ARRAYS:
//No javascript não precisamos definir o tipo de dado de uma array, basta colocar uma variável ou constante declarada e atribuir valores sobre ela. Diferente de outras linguagens também, não precisamos definir um tamanho físico para o array no momento da declaração dele. Além disso, como o Javascript é uma linguagem fracamente tipada, podemos adicionar vários tipos de dados dentro de um array (Embora essa não seja uma boa prática).


//DECLARANDO UM ARRAY DE FORMA LITERAL:
const VALORES = [7.7, 8.9, 6.3, 9.2];
console.log(`1) ${VALORES[0]} ${VALORES[3]}`);  //Perceba que os índices são referenciados sem problema algum...


//LENDO ÍNDICES NÃO DECLARADOS:
console.log(`2) ${VALORES[4]}`); //Perceba que o índice 4 não existe, mas o Javascript não apresenta erro, em vez disso, ele trata o valor como "undefined"...


//ATRIBUINDO VALORES A UM ARRAY:
VALORES[4] = 10.2;
console.log(`3) ${VALORES[4]}`);
console.log(`4) ${VALORES}`); //Veja que foi incluso justamente na 4ª posição do Array...


//ATRIBUINDO VALOR A UMA POSSIÇÃO MUITO Á FRENTE:
VALORES[10] = 12.6; //Perceba que atribuímos um valor á 10ª posição de uma array, mas ele não tem outros valores da 4ª posição em diante...
console.log(`5) ${VALORES}`); //Ainda assim o Javascript não apresenta erro, em vez disso, ele gerará índices nulos até que cheguem ao índice de número 10...


//USANDO A FUNÇÃO LENGTH PARA LER A QUANTIDADE DE ELEMENTOS DE UM ARRAY...
console.log(`6) ${VALORES.length}`);


//ADICIONANDO DADOS POR ATRAVÉS DA FUNÇÃO PUSH():
VALORES.push({id: 3}, false, null, 'teste'); //Veja que usamos o push para adicionar valores ao final de uma array, e não apenas isso, adionamos valores de diferentes tipos de dado...
console.log(`7) ${(VALORES)}`);


//RETIRANDO VALORES DO ARRAY E VISUALIZANDO O VALOR RETIRADO:
console.log(`8) ${VALORES.pop()}`); //Para isso usamos a função pop(), essa função retira o último valor do array e ainda imprime o valor que foi retirado...
console.log(`9) ${VALORES}`); //Note que o valor foi realmente retirado...


//RETIRANDO VALORES DE UM ÍNDICE:
delete VALORES[0]; //Usando a propriedade delete podemos remover o valor de um índice, porém o índice ainda continuará lá...
delete VALORES[1];
delete VALORES[2];
delete VALORES[3];
delete VALORES[4];
console.log(`10) ${VALORES}`);


//TODO ARRAY EM JAVASCRIPT É DO TIPO OBJECT:
console.log(`11) ${typeof VALORES}`);
//MANIPULANDO NUMBERS:

//QUALQUER DADO É NUMBER:
//No javascript, independente se um número é real, inteiro ou negativo, ele sempre será encarado como sendo do tipo Number.
console.log("1) " + typeof 31);

let idade = 31;
console.log("2) " + typeof idade); //Perceba que é o mesmo number

let salario = 4578.32;
console.log("3) " + typeof salario); //Perceba que mesmo valores reais no Javascript são tratados como do mesmo tipo para inteiros

let temperatura = -27;
console.log("4) " + typeof temperatura); //Mesmo números negativos são numbers também


//USANDO FUNÇÕES PARA DESCOBRIR SE É INTEIRO OU REAL:
//Apesar do Javascript interpretar os valores como Number, sem importar se são inteiros ou reais, podemos usar funções internas da linguagem para ver se o valor é Inteiro ou Float...
console.log("5) " + Number.isInteger(salario)); //Se for inteiro ele retorna "true" se não, retorna "false"...


//TRANSFORMANDO STRING EM NÚMERO:
let nome = '1000';
console.log("6) " + typeof Number(nome)); //Caso tenhamos uma string toda numérica, o cast "Number" retorna o valor de uma string como se fosse um número...


//TRANSFORMANDO NÚMERO EM STRING:
let numero = 1000;
console.log("7) " + typeof numero.toString()); 


//ESCOLHENDO NÚMERO DE CASAS DECIMAIS DE UM NÚMERO REAL:
let contaBancaria = 1.2848956; //Perceba que temos 7 casas decimais depois do ponto...
console.log("8) " + contaBancaria.toFixed(2)) //Usando a função reduzimos para mostrar só 2 casas decimais...


//VALOR INFINITO:
console.log(7 / 0); //Todo número dividido por 0, e não apenas isso, mas qualquer número que dê um valor astronômico de se calculado gera um tipo de dado específico do Javascript, que é o tipo de dado "Infinity"


//OPERAÇÕES ARITMÉTICAS ENTRE STRINGS NUMÉRICAS E NUMBERS:
//No Javascript é possível calcular strings numéricas (ou seja, que tenham valor de número) junto com numbers de verdade...
console.log('10' * 2); //Podemos calcular strings com números inteiros...
console.log('10.2' * 2); //Com números reais...
console.log('10.2' * '10.5'); //Ou mesmo duas strings numéricas...


//OPERAÇÕES SOBRE VALORES REAIS QUE PODEM GERAR VALORES DIFERENTES DO ESPERADO:
console.log(0.1 + 0.7); //Note que o resultado deveria ser 0.8, porém, pela especificação do Javascript I3E.
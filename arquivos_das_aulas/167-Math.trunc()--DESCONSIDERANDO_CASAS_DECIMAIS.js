//MATH.TRUNC():

//O "Math.trunc()" é uma função built-in da biblioteca "Math" que faz o que a matemática chama de truncamento de um número de ponto flutuante, que nada mais é do que o ato de desconsiderar seus números que possuam casa decimal.

//Por exemplo, se um número for 10.4, ele vai desconsiderar o "4" e retornar somente o valor "10".
//Vejamos um exemplo:

//TRUNCANDO VALOR:
let numTruncado = 15.49
console.log('1)',Math.trunc(numTruncado))



//TRUNCAMENTO FUNCIONA MESMO EM NÚMEROS QUE ESTEJAM COM A CASA DECIMAL PRÓXIMO DO SEU TETO PARA ATINGIR O VALOR SEGUINTE:
let numTruncadoQuaseCeil = 16.99 //Veja que mesmo que o número esteja quase no teto do seu valor, o valor decimal será desconsiderado...
console.log('\n2)',Math.trunc(numTruncadoQuaseCeil))
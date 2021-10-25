//PARSEFLOAT():
//O método "parseFloat()" - mudando para Float - pega uma string obviamente numérica e a converte para float.

//CONVERTENDO STRING PARA FLOAT:
const numeroString = '4' //Perceba que é uma string...
console.log('1)', parseFloat(numeroString)) //Aparentemente não mudou nada
console.log(typeof parseFloat(numeroString)) //Mas quando vemos o typeof, vemos que realmente é um number...



//CONVERTENDO NUMEROS COM CADA DECIMAL:
const decimalString = '2.42' //Veja que quando o número apresenta ponto flutuante...
console.log('\n2)', parseFloat(decimalString)) //Ele vai com o ponto flutuante também...
console.log(typeof parseFloat(decimalString))

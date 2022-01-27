//MATH.ROUND():

//O "Math.round()" é uma função built-in da biblioteca "Math" apanha um valor float e pode arredondá-lo para cima ou para baixa dependendo do número que está na casa decimal.

//Para isso o Math.round() segue 2 regras:
/*
    - Arredontamento para baixo:
        Se o número após a casa decimal for menor de 5, por exemplo "1.49", o Math.round() irá arredondar o valor para baixo;

    - Arredontamento para cima:
        Se o número após a casa decimal for igual ou maior que 5, por exemplo "1.5", o Math.round() irá arredondar o valor para cima;
*/
//Vejamos alguns exemplos:

//ARREDONDANDO VALORES PARA BAIXO COM MATH.ROUND():
let baixo = 1.49
console.log('1)', Math.round(baixo))



//ARREDONDANDO VALORES PARA CIMA COM MATH.ROUND():
let cima = 1.5
console.log('\n2)', Math.round(cima))
//O Math.pow() é uma função built-in do JavaScript para fazermos cálculos com valores potênciais (Power em inglês)
//Vejamos como utilizá-la:

let raio = 10;
let calcArea = Math.PI * Math.pow(raio, 2); //Perceba que o Math.pow recebe primeiro o valor do raio a ser calculado, e depois recebe o valor do expoente ao qual queremos elevar o valor.

console.log("O valor de uma área com raio de 10m é: " + calcArea + "m².");
console.log("O valor de Pi é: " + Math.PI + ".");
//isInterger()
//Com a função interna do Javascript "isInterger()" é possível descobrir se um número é inteiro ou real...
let int = 2; //é inteiro
let real = 2.4; //é real
let int2 = 2.0; //mesmo que tenha ponto, se o valor depois do ponto for apenas 0, ela vira inteiro...

console.log("1) " + int);
console.log("   " + Number.isInteger(int) + "\n"); //Veja o detalhe! isInterger é usando em conjunto com o cast Number

console.log("2) " + real);
console.log("   " + Number.isInteger(real) + "\n");

console.log("3) " + int2);
console.log("   " + Number.isInteger(int2) + "\n");
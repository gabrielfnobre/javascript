//OPERADORES ARITMETICOS:
//Geralmente a grande maioria dos operadores aritméticos são operadores binários, ou infix como também são conhecidos nas linguagens de programação em geral.

//USANDO OPERADORES ARITIMÉTICOS EM ESTRUTURAS INFIX:
const [a, b, c, d] = [3, 2, 1, 15]; //Usamos um destructuring para gerar vários valores de uma vez para 4 variáveis...
console.log(`Soma \t\t\t\t${a} + ${b} = ${a + b}`);
console.log(`Subtração \t\t\t${c} - ${d} = ${c - d}`);
console.log(`Multiplicação \t\t${a} * ${c} = ${a * c}`);
console.log(`Divisão \t\t\t${b} / ${d} = ${b / d}`);
console.log(`Módulo \t\t\t\t${d} % ${a} = ${d % a}`);
console.log(`Pontecialização \t${b} ** ${a} = ${b ** a}`);
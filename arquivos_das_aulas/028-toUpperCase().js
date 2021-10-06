//toUpperCase():
//É uma função built-in do Javascript para transformar strings em letra maiúscula...

//TRANSFORMANDO UMA LITERAL STRING EM UPPERCASE:
console.log('Gabriel'.toUpperCase());


//TRANSFORMANDO O VALOR DE UMA VARIÁVEL EM UPPERCASE:
let nome = 'Gabriel';
console.log(nome.toUpperCase());


//USANDO ARROW FUNCTION DENTRO DE TEMPLATES:
const up = texto => texto.toUpperCase(); //Uma função que transforma textos em letra maiúsculas...
console.log(`Ei... ${up('cuidado')}!`);
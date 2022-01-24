//toLowerCase():
//É uma função built-in do Javascript para transformar strings em letra minúscula...

//TRANSFORMANDO UMA LITERAL STRING EM LOWERCASE:
console.log('Gabriel'.toLowerCase());


//TRANSFORMANDO O VALOR DE UMA VARIÁVEL EM LOWERCASE:
let nome = 'GABRIEL';
console.log(nome.toLowerCase());


//USANDO ARROW FUNCTION DENTRO DE TEMPLATES:
const down = texto => texto.toLowerCase(); //Uma função que transforma textos em letra minúsculas...
console.log(`Ei... ${down('CUIDADO')}!`);
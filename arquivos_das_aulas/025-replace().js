//replace():
//FUNÇÃO QUE TROCA UM DETERMINADO CARACTERE DENTRO DE UMA STRING POR UM CARACTERE DIFERENTE:

console.log('batata'.replace('a', 'o')); //Perceba que somente o primeiro caracter foi trocado...
console.log('batata'.replace('t', 'o')); //Veja que agora o "t" que foi trocado...
console.log('G4br13l'.replace(4, 'o')); //se no meio da string tiver números, eles também serão trocados...
console.log('G4br13l'.replace(/\d/g, 'o')); //podemos usar regex, substituindo todos os números por um caracterer específico...
console.log('G4br13l'.replace(/\w/g, 'o')); //Ou trocar todas os caracteres por um específico...
//TIPAGEM O JAVASCRIPT

//O Javascript é uma linguagem de programação que possuí tipagem fraca, isso significa que os tipos primitivos dessa linguagem não precisam ser obrigatóriamente declarados ao declarar uma variável ou constante e além disso, eles não precisam de ter sempre o mesmo tipo de dado.

let qualquer = 'nome'; //Perceba que não precisamos de especificar qual seria o tipo de dado da variável qualquer...
console.log(qualquer); 
console.log(typeof qualquer);  //Por natureza, o Javascript já sabia que era uma string...

qualquer = 3.1234;  //Perceba que sem usar cast o tipo de dado foi modificado...
console.log(qualquer);
console.log(typeof qualquer);
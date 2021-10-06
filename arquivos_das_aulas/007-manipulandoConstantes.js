//CONSTANTES NÃO PODEM SER MUDADAS
const A = 3;  //Perceba que o nome da constante está em maiúsculo, por convenção sempre escrevemos o nome de constantes em maiúsculo
console.log(A);
//**** DESCOMENTE AQUI!!!  A = 10; //Perceba que não conseguimos mudar o valor de "a", o terminal apresenta erro na linha 5
console.log(A);



//CONSTANTES NÃO PODEM SER DECLARADAS SEM SEREM INICIALIZADAS:
//**** DESCOMENTE AQUI!!! const B; //Perceba que uma constante não pode ser declarada sem ser inicializada por através de um valor, será apresentada uma mensagem de erro



//HOSTING NÃO ACONTECE EM CONST:
console.log('7) ', D);
const D = 'Sou const, por isso não sou possível'; //consts também têm um comportamento de escopo diferente de var, por isso eles não sofrem hosting...
console.log('8) ', D);
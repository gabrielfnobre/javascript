//HOSTING:
//A palavra Hosting significa literalmente "Içamento", como uma garra mecânica que iça materiais de construção. Essa palavra é muito apropriada para exemplificar o que o hosting faz, que é literalmente "içar" a declaração de variáveis todas para o topo do programa Javascript, possibilitando que as variáveis possam ser chamadas de qualquer lugar do programa, mesmo de linhas bem acima da sua própria declaração. Esse é um conceito que não existe nas demais linguagens de programação, nas demais linguagens só podemos referenciar uma variável depois de ela ter sido declarada, caso contrário o nosso programa executaria um erro de "variável não declarada". Isso não acontece em Javascript, podemos colocar a chamada de uma variável nas linhas antes da sua declaração, o Javascript não irá apresentar erro.
//Porém, por mais que as variáveis possam ser referenciadas, os seus valores só serão atribuídos á partir da linha onde a atribuição aconteceu, qualquer chamada da variavel antes da sua linha atribuição geraria um valor "undefined", pois o hosting não iça os valores para o topo, ele iça somente as variáveis.
//OBSERVAÇÕES: o Hosting não tem nenhuma aplicação específica a não ser evitar que o programa pare de executar por que a variável ainda não foi declarada.

//REFERENCIANDO UMA VARIAVEL AINDA NÃO DECLARADA:
console.log('1) ', a); //Referenciamos uma variável "a" que ainda não foi declarada, perceba que a variável existe, mas o seu valor ainda não pôde ser encontrado...
var a = 2; //Aqui aconteceu a declaração de "a"...
console.log('2) ', a); //Perceba que depois da atribuição de valores dela, nós conseguimos capturar o seu valor como resposta...



//HOSTING ACONTECE ATÉ DENTRO DE FUNÇÕES:
function teste() { //Perceba que o mesmo se repete na função abaixo, onde tentamos imprimir o valor de uma variável ainda não declarada...
    console.log('3) ', b);
    var b = 'Eu tenho valor agora';
    console.log('4) ', b); //Somente depois da atribuição podemos ver o seu valor...
}
teste();



//HOSTING NÃO ACONTECE EM LET:
//**** DESCOMENTE AQUI!!! console.log('5) ', c);
let c = 'Sou let, por isso não sou possível'; //Como let tem um comportamento de escopo diferente de var, ele não sofre hosting
console.log('6) ', c);



//HOSTING NÃO ACONTECE EM CONST:
console.log('7) ', D);
const D = 'Sou const, por isso não sou possível'; //consts também têm um comportamento de escopo diferente de var, por isso eles não sofrem hosting...
console.log('8) ', D);
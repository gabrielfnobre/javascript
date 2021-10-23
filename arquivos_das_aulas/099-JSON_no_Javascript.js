//JSON:
//JSON ou "Javascript Object Notation" é um formato de dados baseado na tecnologia Javascript que é utilizada para gerar um tipo de dado textual que possa ser lido em qualquer tipo de tecnologia - essa capacidade é chamada de interoperabilidade.
//No Javascript existe o tipo de dado JSON, que usamos para ler e também para converter dados em JSON, esse tipo de dado inclusive possuí suas próprias funções internas.
//O JSON não serve para gerar código fonte, o seu papel é unicamente transitar dados, podemos trafegar conjuntos de informações que podem ser lidas em qualquer sistema. Se algum comportamento for adicionado ao arquivo JSON, isso é com a tecnologia em questão.
//E o tipo de dado em Javascript escolhido para ser trafegado é o Objeto, onde temos sempre um conjunto de par "chave e valor". Mas o JSON tem algumas regrinhas que devem ser seguidas, elas são:
/*
        * Todo arquivo JSON deve começar com áspas - sejam elas duplas ou simples
        * Todo arquivo deve estar entre colchetes logo após as áspas, assim: "{ }"
        * Qualquer elemento textual dentro de um arquivo JSON deve ter áspas duplas - se tivermos começado o arquivo com áspas duplas temos que usar a barra invertida nas áspas da sequência;
        * Funções não podem ser passadas dentro de um objeto JSON somente texto;
*/

//GERANDO UM ARQUIVO JSON Á PARTIR DE UM OBJETO EM JAVASCRIPT:
//É possível gerar um arquivo JSON em Javascript por através do tipo JSON em javascript e o método "stringify()", da seguinte forma: 
const obj = {a: 'Oi', b: 'tudo', c: 'bem?'}
console.log('1)', JSON.stringify(obj)) //Note que o arquivo JSON contém áspas duplas em cada elemento textual do objeto...



//TRANSFORMANDO OBJETO JSON EM UM OBJETO EM JAVASCRIPT:
//Podemos usar o método "parse()" do tipo JSON em Javascript para transformar um arquivo JSON em um Objeto novamente...
console.log('\n2)', JSON.parse('{ "a":"Oi", "b":"tudo", "c":"bem?"}'))



//FUNÇÕES NÃO SÃO PASSADAS:
//Perceba que no objeto abaixo, embora ele contenha uma função dentro dele, a função não é passada para o JSON...
const objFuncNo = {a:1, b:2, c:3, funcao() {}}
console.log('\n3)', JSON.stringify(objFuncNo))



//FORMATOS DE DADOS ACEITOS EM JSON:
//O JSON aceita: double, interger, string, object e array sem problemas...
const objAcept = {a:1, b:2.3, c:'Oi', d:{ d1: 1 }, e: ['1º', '2º'] }
console.log('\n4)', JSON.stringify(objAcept))
//STRINGIFY():
//O método "stringify()" é um método interno do JSON que pode ser utilizado para transformar um objeto comum em Javascript em um arquivo JSON.
//Podemos utilizá-lo da seguinte maneira...

//GERANDO UM ARQUIVO JSON Á PARTIR DE UM OBJETO EM JAVASCRIPT:
//É possível gerar um arquivo JSON em Javascript por através do tipo JSON em javascript e o método "stringify()", da seguinte forma: 
const obj = {a: 'Oi', b: 'tudo', c: 'bem?'}
console.log('1)', JSON.stringify(obj)) //Note que o arquivo JSON contém áspas duplas em cada elemento textual do objeto...



//FUNÇÕES NÃO SÃO PASSADAS:
//Perceba que no objeto abaixo, embora ele contenha uma função dentro dele, a função não é passada para o JSON...
const objFuncNo = {a:1, b:2, c:3, funcao() {}}
console.log('\n2)', JSON.stringify(objFuncNo))



//FORMATOS DE DADOS ACEITOS EM JSON:
//O JSON aceita: double, interger, string, object e array sem problemas...
const objAcept = {a:1, b:2.3, c:'Oi', d:{ d1: 1 }, e: ['1º', '2º'] }
console.log('\n3)', JSON.stringify(objAcept))
//MODULE.EXPORTS:
//Os módulos no Node são objetos onde temos um conjunto de chave e valor, em que os atributos de um módulo podem ser acessados por qualquer aplicação que importe esses módulos. Para isso temos algumas formas de exportar esses atributos:

//EXPORTANDO COM THIS:
console.log('1)', module.exports === this) //Perceba que o this referencia diretamente para o module.exports...
this.ola = 'Fala pessoal' //Veja que criamos um atributo dentro do modulo exports chamado "ola", embora possamos usar o "this" esse método é pouco indicado...




//EXPORTANTO COM EXPORTS:
console.log('\n2', module.exports === exports) //Perceba que assim como o "this" o "exports" também faz referencia direta ao module.exports...
exports.bemVindo = 'Bem vindo ao node' //E assim como o this podemos usar o exports para criar atributos diretamente no module exports dando um nome ao atributo"...




//EXPORTANDO PELO MODULE.EXPORTS:
module.exports.ateLogo = 'Até logo' //E claro, podemos criar um objeto direto usando module.exports...




//VARIAVEIS NÃO FICARÃO VISIVEIS NO ARQUIVO EXTERNO:
let naoExports = 'Não fui exportado' //Veja que valores que não foram exportados não ficaram visíveis em outro arquivo...
console.log('\n3)', naoExports)




//MODO MAIS USADO DE EXPORTAR ATRIBUTOS:
//****DESCOMENTE AQUI!!!
// module.exports = { //O "module.exports" com a atribuição direta é o módulo mais comum a ser criado, onde geramos chaves diretamente dentro do objeto. Nesse método de sobrescrita de todo o módulo temos que usar o nome completo "module.exports" se tentarmos usar "this" ou "exports" o nosso arquivo vai gerar erro ou undefined...
//     bomDia: 'Bom dia',
//     boaNoite() {
//         return 'Boa noite'
//     }
// }




//FORMAS ERRADAS DE GERAR ATRIBUTOS:
//****DESCOMENTE AQUI!!!
this = { //Perceba que embora o this faça referência ao module.exports não podemos gerar um atributo dentro dele diretamente, temos que usar a notação de objeto...
    oi: 'Olá tudo bem'
} //Perceba que this também dá erro...

exports = { //O mesmo serve para o exports, não podemos gerar um objeto nele diretamente, assim como o this ele é apenas um método de acesso para o module.
    comoVai: 'Como vai?'
}
console.log('\n4)', module.exports) //Veja que nenhum valor foi incluso...

//PARA VER COMO OS MÓDULOS SÃO IMPORTADOS CONSULTE A AULA 134-module.exports_Exportando_Modulos-Cliente.js...
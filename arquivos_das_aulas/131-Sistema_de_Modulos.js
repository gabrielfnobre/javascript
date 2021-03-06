//SISTEMA DE MÓDULOS:

//Entender o Sistema de Módulos é essencial para entender como uma aplicação Javascript funciona no Back-End usando o Node como runtime do Javascript.

//Falando um pouco sobre o funcionamento das aplicações Front-End, antigamente as aplicações Front-End eram feitas em um único arquivo Javascript com várias funções soltas que eram chamadas pelo arquivo HTML. Porém, hoje em dia não é mais feito assim, as aplicações são desenvolvidas em varios arquivos, onde cada arquivo tem sua funcionalidade, e esse arquivo é concatenado e minificado antes de ser enviado ao browser. Isso permite aplicações mais organizadas e mais leves, melhorando o desempenhos das nossas aplicações Front-End.

//A programação em Back-End já foge desse paradigma de compactação do arquivo, nós ainda temos que organizar nossos arquivos em pastas para manter a boa organização dos arquivos, porém, não precisamos compactá-los, pois eles serão interpretados no servidor, por uma linguagem que o servidor entende e browser desconhece. A partir daí o que será trafegado para o browser serão arquivos em formato JSON, que serão gerados no Servidor e interpretados pelo Javascript no browser.

//Como os arquivos são interpretados pelo Node?
//No Node, um arquivo é um módulo. E os módulos tem um comportamento especial que é não permitir que os códigos escritos dentro dele fiquem disponíveis para qualquer código externo. Essa ideia é bem parecida com o encapsulamento da POO. Para que tenhamos acesso aos códigos de um módulo ou para que possamos exportar códigos do nosso módulo para outras aplicações usamos o sistema "commonJS" que nada mais é do que a forma como o Node Importa e Exporta códigos de um módulo para uma aplicação. Vejamos como fazer a exportação e importação de arquivos...

//Que tipos de módulos vamos encontrar no Node?
//No Node vamos ter módulos Internos, Externos e Core Modules:
/*      * Módulos Internos: São os módulos criados por nós mesmos, que podem ser acessados por através de um simples 
            caminho relativo;
        * Módulos Externos: São módulos criados por terceiros que podem ser importados como bibliotecas por através do 
            comando "npm";
        * Módulos Core: São módulos do próprio Node que já vêm pré-instalados assim que instalamos o Node na nossa  
            máquina, eles podem ser chamados diretamente no require();
*/

//Para Exportar usamos o module.exports, que pode ser usado das seguintes formas:
this.ola = 'Fala pessoal' //É importante que saibamos que todo módulo é como se fosse um grande objeto e todos os elementos criados dentro dele são atributos desse objeto, o "this" é uma forma de criar um destes atributos, porém é uma forma menos comum...
exports.bemVindo = 'Bem vindo ao node' //O "exports" é uma forma abreviada de usar o "module.exports"...
module.exports.ateLogo = 'Até logo' //O "module.exports" é a forma mais comum de atribuir novos atributos ao módulo, quando queremos criar um valor de chave específica...
let naoExports = 'Não fui exportado' //Veja que valores que não foram exportados não ficaram visíveis em outro arquivo...

//****DESCOMENTE AQUI!!! Descomente aqui para ver que o "module.exports" atribuído diretamente sobrescreve quaisquer módulos criados anteriormente... 
// module.exports = { //O "module.exports" com a atribuição direta é o módulo mais comum a ser criado, onde geramos chaves diretamente dentro do objeto. Nesse método de sobrescrita de todo o módulo temos que usar o nome completo "module.exports" se tentarmos usar "this" ou "exports" o nosso arquivo vai gerar erro ou undefined...
//     bomDia: 'Bom dia',
//     boaNoite() {
//         return 'Boa noite'
//     }
// }

//PARA VER COMO OS MÓDULOS SÃO IMPORTADOS CONSULTE A AULA 131-Sistemas_de_Modulos_Cliente.js...
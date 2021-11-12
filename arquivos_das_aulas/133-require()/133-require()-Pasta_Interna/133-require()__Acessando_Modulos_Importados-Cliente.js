//REQUIRE():

//O método require() é um método do Node que usamos para importar módulos externos a nossa aplicação, sejam eles módulos criados por nós, importados para a pasta "node_modules", módulos globais e módulos Core.

//Para tanto, podemos dividir a importação de módulos em 2 maneiras de fazer, por através do "caminho relativo" e por através da importação global.

//IMPORTANTO MÓDULOS POR ATRAVÉS DE CAMINHOS RELATIVOS:
//Usamos o caminho relativo quando desejamos importar um módulo que está em algum caminho do nosso servidor ou no node_modules, por exemplo:
const modulo133 = require('../../133-require()__Importanto_Modulos-Servidor') //Perceba que usamos o caminho relativo, saindo de todas as pastas até encontrar o módulo desejado, Veja também que o módulo está escrito exatamente igual ao nome do módulo, isso é muito importante, visto que alguns sistemas podem não aceitar módulos que não respeitam o case sensitive.
console.log('1)', modulo133.saudacao)

//Veja que quando o módulo é um módulo importado de uma biblioteca externa e foi armazenado dentro de uma pasta "node_modules" podemos simplesmente colocar o nome do módulo, que o node irá encontrá-lo sozinho pesquisando pelas pastas até encontrar a pasta "node_modules" dentro do nosso arquivo.
//OBS: Toda biblioteca dentro do "node_modules" possuí um arquivo "index.js" que será chamado pelo node, é por através do "index.js" que conseguimos executar a biblioteca. Toda biblioteca externa possuí um index.js, e geralmente é o index.js que serve como uma espécie de interface para os demais métodos da biblioteca sejam encontrados e executados.
const moduloLodash = require('lodash')
console.log('\n2)', moduloLodash.random(1, 1000))




//IMPORTANTO MÓDULOS CORE E GLOBAIS:
//O node possuí módulos internos embutidos nele, para fazer a importação desses módulos basta colocar o nome do módulo dentro do require e ele será importado...
const server = require('http') //Aqui estamos usando o módulo "http" um módulo built-in e também global do Node, veja que basta colocar o nome que o Node irá encontrá-lo sem problema algum.
server.createServer((req, res) => { //Usamos o método createServer para para criar um servidor que escreve "Bom dia" na tela quando procuramos pelo endereço "localhost:8080" no navegador...
    res.write('Bom dia!')
    res.end()
}).listen(8080)
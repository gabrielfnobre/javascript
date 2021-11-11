//MÓDULOS DE TERCEIROS:

//Para que possamos utilizar módulos de terceiros no nosso arquivo Javascript temos que baixá-los por através da ferramenta npm (node package manager) que irá buscar as bibliotecas de terceiros, onde poderemos utilizá-las.
//Podemos escolher entre baixar uma biblioteca apenas no nosso arquivo por através do comando:
//      npm i bibliotecaTal

//Ou podemos baixá-la globalmente por através do comando:
//      npm i -g bibliotecaTal

//Quando baixamos uma biblioteca no nosso arquivo local, o node automáticamente gera uma pasta "node_modules" no nosso arquivo onde ficarão armazendas todas as bibliotecas externas baixadas para aquele determinado arquivo. E também, o node irá gerar um arquivo package-lock.json.

//Usamos como exemplo nessa aula as bibliotecas "lodash" e "nodemon"

//Perceba que ao baixar a biblioteca lodash como uma pasta interna dentro da nossa pasta de arquivos, o lodash vai imediatamente para a pasta "node_modules" e dentro dessa pasta temos uma pasta somente para os arquivos da biblioteca "lodash", esses arquivos dentro da biblioteca são o que nós chamamos de dependências.

//Nós também baixamos a biblioteca "nodemon" mas de maneira global, perceba que ela não vai para a pasta "node_modules".

//OBS: Ignorar nossas bibliotecas externas quando versionamos no github. Como não compensa salvar bibliotecas externas salvas nos nossos arquivos, pois podemos baixá-las onde quer que estivermos, podemos criar um arquivo ".gitignore" e dentro desse arquivo basta colocarmos o nome dos arquivos ou pastas que desejamos que sejam ignoradas pelo git.

//Importando a biblioteca externa para o nosso arquivo:
//Perceba que para importar, nós usamos o require() assim como usamos nos nossos módulos internos, mas com a diferença de que não precisamos de relacionar caminho relativo por através do "./", o próprio Node já se encarrega de procurar dentro da pasta por alguma biblioteca com o nome que estiver dentro de require(), se não achar dentro da pasta, o Node sairá procurando pelas pastas á fora...
const _ = require('lodash') //Por convenção, os desenvolvedores usam o "_" (underline) como nome de variável ao fazer a importação da biblioteca "lodash"...
setInterval(() => console.log(_.random(1, 1000)), 2000)
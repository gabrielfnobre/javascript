//ARGV:

//O "argv" é um atributo da propriedade "process", ele é responsável por armazenar os comandos que nós fazemos sobre no terminal para o Node. Comandos como "node", "nome_do_arquivo.js" e "flags" são todos armazenados dentro de array referencia a essa propriedade.
//Todo arquivo .js possuí essa propriedade, e ela pode ser indexada para trazer para nós alguns resultados.
//Por padrão, o índice de número "0" equivale ao elemento "node.exe", responsável por fazer a execução do Node, e o índice "1" referencia ao nome do arquivo .js, os demais índices são quaisquer flags que nós utilizarmos no terminal, essas flags serão indexadas no argv á medida que nós formos as utilizando...

//REFERENCIANDO AO ARQUIVO "NODE.EXE" PRESENTE NO ÍNDICE "0" DO ARGV:
console.log('1)', process.argv[0]) //Note que ele puxa o elemento .exe que está dentro do nosso disk C no computador...



//REFERENCIANDO AO PRÓPRIO NOME DO ARQUIVO:
console.log('\n2)', process.argv[1]) //Note que ele puxa o próprio caminho do arquivo...



//REFERENCIANDO A UMA FLAG UTILIZADA NO ARQUIVO:
const numeroDaFlag = process.argv.indexOf('-a') //Perceba que quando pegamos a posição indexada de uma flag usada nesse arquivo, ele pega a posição de número "2"...
console.log('\n3)', numeroDaFlag) //Note que para capturar o número de uma flag temos que executar o arquivo no terminal junto com a flag, do contrário, o programa acima vai procurar a flag e não vai encontrá-la, indo direto para o índice final de um array, que é o índice de número "-1"...
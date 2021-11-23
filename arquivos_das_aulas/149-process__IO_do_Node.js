//PROCESS:

//O process é uma propriedade global do Node que utilizamos para fazer o IO (Input / Output) do Node, onde é possível fazer a entrada (por através do teclado) e saída (por através da tela) de dados por através do terminal quando nós chamamos por um determinado arquivo.

//RECEBENDO A FLAG "-A" E PROCESSANDO UMA EXECUÇÃO:
const anonimo = process.argv.indexOf('-a') !== -1 //Perceba que o process pode receber uma flag e compará-la com o os elementos do argv...



//MOSTRANDO E RECEBENDO DADOS NA TELA POR ATRAVÉS DO PROCESS:
if (anonimo) { //Perceba que, caso a flag "-a" seja passada a operação abaixo será executada...
    process.stdout.write('O elemento "-a" é existente dentro de argv') //Perceba que o processe, em conjunto com o atributo "stdout" - responsável por exibir mensagens no terminal, assim como o console.log() exibe mensagens no console - está sendo usado em conjunto com o método "write()" - um método que recebe uma string e a atribuí a um objeto.
} else{ //Caso a flag "-a" não seja atribuída...
    process.stdout.write('Escreva seu nome: ') 
    process.stdin.on('data', data => { //Usando o atributo "stdin" podemos receber dados escritos diretamente no terminal. Note que também estamos usando o metodo jquery"on()" que dispara um evento, juntamente com o evento "data" - esse evento lê dados e é ativado depois que o usuário clica em enter..
        const nome = data.toString() //o evento recebe um nome e o transforma em uma string, para que possa ser interpretado pelo método write...
        process.stdout.write(`Fala ${nome}!!!`)
        process.exit() //Usamos aqui o método "exit()" para encerrar a execução...
    })
}
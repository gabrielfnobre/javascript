//DESVANTANGEM DE UMA CALLBACK HELL SOBRE UM PROMISE:

//Para mostrarmos como um promise é muito mais vantajoso do que utilizar callbacks uma encadeada sobre a outra somente para trazer um resultado, é muito mais vantajosa.
//Abaixo temos 3 URLS que trazem detalhes sobre 3 turmas de uma escola, as turmas A, B e C:

//Endereço do arquivo JSON para Turma A: http://files.cod3r.com.br/curso-js/turmaA.json
//Endereço do arquivo JSON para Turma A: http://files.cod3r.com.br/curso-js/turmaB.json
//Endereço do arquivo JSON para Turma A: http://files.cod3r.com.br/curso-js/turmaC.json

//Queremos gerar uma função que retorne somente os nomes dos alunos de cada turma em um único array...

//Primeiro temos que importar uma biblioteca para conexão com o arquivo por através de protocolo "http"...
const http = require('http') //Estamos usando o módulo interno "http" do node invez de usar o "axios" por que o axios já é baseado em promise, então não faria sentido fazer um exercício com promise numa biblioteca que já utiliza "promise", por isso estamos usando a biblioteca "http" que é mais genérica.

//Abaixo temos a função que captura o arquivo JSON de acordo com a letra da turma...
const getTurma = (letra, callback) => { //Já que o único parâmetro que diferencia as URLS das turmas é uma letra, nossa função vai receber uma letra que será fundida a url de busca por através de um template string. E como 2º parâmetro, vai receber uma callback para o tratamento dos valores posteriormente...
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` //Aqui juntamos a letra com a URL...
    http.get(url, res => { //Usando o método get da biblioteca "http" buscamos uma resolução para a nossa url e também executamos uma função callback que recebe como parâmetro os dados que estiverem no endereço da URL em formato de memória em buffer...
        let resultado = '' //Temos uma variável que vai receber os dados...

        res.on('data', dados => { //a variável vai receber os dados JSON dentro de um array com os dados da URL graças ao "on('data')""
            resultado += dados
        })

        res.on('end', () => { //Aqui temos um evento que finaliza a execução por chamar a callback que irá tratar os dados recebidos, mas antes irá transformar esses dados para o formato JSON...
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = [] //Aqui temos a variável que vai receber somente os nomes de todos os alunos de todas as turmas...
getTurma('A', alunos => { //Perceba que chamamos a função "getTurma" primeiramente passando como parâmetro a letra "A", para pegar os alunos somente da turma "A", e usamos uma callback que mapeia somente os nomes e os atribuí a variável nomes...
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => { //Em seguida temos outra chamada para a função "getTurma" dentro da chamada da para a turma "A", mas agora chamando a turma "B", só para não ter que chamar a turma B numa segunda chamada separada...
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => { //E outra para a turma "C"
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes) //Como podemos ver, todas as chamadas são atribuídas para a mesma variável "nomes"...
        })
    })
})
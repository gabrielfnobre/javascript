//USANDO PROMISE PARA LER UM ARQUIVO:

//Veja que podemos chamar um arquivo á partir de um promise, isso faz com que mesmo que um arquivo seja chamado de forma síncrona por através da biblioteca 'fs', ainda assim ele seja invocado de forma assícrona graças ao Promise()...

//Primeiro chamamos a biblioteca "fs":
const fs = require('fs')

//Passamos um caminho para "fs"...
const path = __dirname + '/141-Arquivo_JSON.json'

//Aqui está a nossa função que instanciará uma promisse para chamar um determinado arquivo no caminho...
function readArchive(path) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fs.readFileSync(path, 'utf-8')) //Perceba que estamos invocando de forma síncrona, mas por estar dentro de um promise ele virá de forma assícrona...
        } catch(error) {
            reject(error)
        }
    })
}

readArchive(path)
    .then(archive => console.log('\n', archive))
    .catch(error => console.log(error))

console.log('O arquivo foi invocado de forma assícrona, por que eu fui invocado primeiro apesar de ter sido escrito depois...') //Note que o console aqui foi escrito depois, mas é impresso antes, provando que a chamada do arquivo realmente é assícrona...
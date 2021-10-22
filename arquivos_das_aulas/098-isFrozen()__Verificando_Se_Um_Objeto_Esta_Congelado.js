//FUNÇÃO ISFROZEN() - VERIFICANDO SE UM OBJETO ESTÁ CONGELADO:
//A função isFrozen() verifica de um objeto foi congelado pela função "freeze()", retornando "true" se o objeto tiver sido congelado, ou "false" se ele não tiver sido...
const copo = Object.freeze(
    {
        volume: 'cheio',
        temperatura: 'quente'
    }
)

copo.volume = 'metade' //O valor não pôde ser modificado...
delete copo.temperatura //A chave não pôde ser deletada...
copo.canudo = true //Nem uma nova chave pôde ser adicionada...

console.log('\n1)', copo)

console.log('\n2)', Object.isFrozen(copo))
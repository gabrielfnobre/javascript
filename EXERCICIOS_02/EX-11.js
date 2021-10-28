const arraynovo = [7, 14, 'Olá']
const arraynovo2 = [-100, 14, 'aplicativo', 16]

const recebeSoPrimeiroEUltimo = array => {
    let resultado = []
    for(let i = 0; i < array.length; i++){
        if(array[i] == array[0] || array[i] == array[array.length - 1]){
            resultado.push(array[i])
        }
    }
    return console.log(resultado)
}

recebeSoPrimeiroEUltimo(arraynovo)
recebeSoPrimeiroEUltimo(arraynovo2)
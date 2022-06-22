let numeros = [
    2, 21, 4, 64, 334, 23, 264, 643, 643, 14, 234
]

function retornandoQualquerNumeroQueTenhaODoisnaFrente(array_de_numeros){
    let expresion_Regex = new RegExp(/2\d?/)
    for(let num of array_de_numeros){
        if(expresion_Regex.test(num)){
            console.log(num)
        }
    }
}

retornandoQualquerNumeroQueTenhaODoisnaFrente(numeros)
let numeros = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
]

function soDezenas(array_de_numeros){
    let expresion_in_regex = new RegExp(/1\d/)
    for(let numero of array_de_numeros){
        if(expresion_in_regex.test(numero))
        console.log(numero)
    }
}

soDezenas(numeros)
console.log('\nMostrando primeiro os números pares de 0 a 10 e depois os impares de 0 a 10')

let array = []
let arrayPar = []
let arrayImp = []

for (i = 0; i < 11; i++) {
    array[i] = i
    if (i % 2 == 0) {
        arrayPar[i] = i
    }
    else {
        arrayImp[i] = i
    }
}

console.log(arrayPar);
console.log(arrayImp);

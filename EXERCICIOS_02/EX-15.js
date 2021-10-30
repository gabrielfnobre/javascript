const indicePar = (i, index) => index % 2 == 0
const valorPar = i => i % 2 == 0
const retornaArrayEValorPar = array => array.filter(indicePar).filter(valorPar)

console.log(retornaArrayEValorPar([10, 70, 22, 43]))
console.log(retornaArrayEValorPar([1, 2, 3, 4]))
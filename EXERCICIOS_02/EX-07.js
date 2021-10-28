const estaEntre = (numero, minimo, maximo, inclusivo) => {
    let min = minimo
    let max = maximo
    let num = numero
    if (min > max){
        max = minimo
        min = maximo
    }
    if (inclusivo) {
        if (num >= min && num <= max){
            return true
        } else {
            return false
        }
    } else {
        if (num > min && num < max){
            return true
        } else {
            return false
        }
    }
}

console.log(estaEntre(51, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))
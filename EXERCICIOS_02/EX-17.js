const somarNumeros = a => {
    let result = 0
    for(let i = 0; i < a.length; i++){
        result += a[i]
    }
    return console.log(result)
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])
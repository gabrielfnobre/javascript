const multiplicar = (n1, n2) => {
    let num = n1
    let total = 0
    for(let i = 0; i < num; i++){
        total += n2
    }
    return console.log(total)
}

multiplicar(5, 5)
multiplicar(0, 7)
multiplicar(7, 0)
multiplicar(10, 10)
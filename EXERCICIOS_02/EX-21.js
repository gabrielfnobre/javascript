const qualEhOMenor = a => {
    let resultado = a[0]
    for(let i = 0; i < a.length - 1; i++){
        if (a[i] < resultado){
            resultado = a[i]
        }
    }
    return console.log(resultado)
}

qualEhOMenor([10, 35, 5, 65])
qualEhOMenor([5, -15, 50, 3])
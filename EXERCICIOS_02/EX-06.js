const inverso = valor => {
    if (typeof valor != typeof '' && typeof valor != typeof true){
        console.log(-valor)
    } if (typeof valor != typeof '' && typeof valor != typeof 0) {
        console.log(!valor)
    } if (typeof valor == typeof '') {
        console.log('O valor é uma string, por favor use boolean ou number')
    }
}

inverso(true)
inverso('6')
inverso(-2000)
inverso('programação')
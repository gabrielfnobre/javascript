let arrayDeNumeros = ["(21) 2403-8232", "(11) 9 6827-0316", "(22) 3454-2123"]

function pegaSoTels(numero){
    let regexExpresion = new RegExp(/\(\d{2}\) \d{4}-\d{4}/)

    for(let num of numero){
        if(regexExpresion.test(num) == true)
        console.log("Telefone: " + regexExpresion.exec(num))
    }
}

pegaSoTels(arrayDeNumeros)
let usuario = ["Gabriel Ferreira Nobre", "47.874.773-1", "387.994.028-23"]

function retornaCPF(usuario){
    let regexExpresion = new RegExp(/\d{3}\.\d{3}\.\d{3}-\d{2}/)
    console.log("CPF: " + regexExpresion.exec(usuario))
}

retornaCPF(usuario)
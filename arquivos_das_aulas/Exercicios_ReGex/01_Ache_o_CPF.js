let usuario = ["Gabriel Ferreira Nobre", "387.994.028-23", "47.874.993-1"]

function retornaCPF(usuario){
    let expressao_CPF = new RegExp(/\d{3}\.\d{3}\.\d{3}-\d{2}/)
    console.log("CPF: " + expressao_CPF.exec(usuario))
}

retornaCPF(usuario)
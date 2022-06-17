let usuario = ["Gabriel Ferreira Monteiro", "15.123.321/0001-12", "NOBRECODER"]

function retornaCNPJ(usuario) {
    let expressao_CNPJ = new RegExp(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/)
    console.log("CNPJ: " + expressao_CNPJ.exec(usuario))
}

retornaCNPJ(usuario)
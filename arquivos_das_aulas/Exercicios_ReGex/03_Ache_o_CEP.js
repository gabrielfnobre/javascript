let endereco = "Rua Caripurá - 04264-060"

function encontraCEP(endereco){
    let expressao_CEP = new RegExp(/\d{5}-\d{3}/)
    console.log("CEP: " + expressao_CEP.exec(endereco))
}

encontraCEP(endereco)
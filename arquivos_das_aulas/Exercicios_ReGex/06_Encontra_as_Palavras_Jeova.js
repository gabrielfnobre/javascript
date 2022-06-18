let texto_biblico = "2 Então o anjo de Jeová lhe apareceu numa chama de fogo no meio de um espinheiro.+ Moisés olhou para o espinheiro e viu que ele estava em chamas, mas não se consumia. ... 4 Quando Jeová viu que ele foi olhar, chamou-o do meio do espinheiro e disse: “Moisés! Moisés!” Ele respondeu: “Aqui estou."

function achandoJeovah(texto){
    let arrayDoTexto = texto.split(" ")
    let regex_expresion = new RegExp(/\d/)
    let quantifier = 0

    for(let nome of arrayDoTexto){
        if(regex_expresion.test(nome) == true){
            quantifier++
        }
    }

    console.log(`O nome de Jeová aparece ${quantifier} vez(es) nesse texto.`)
}

achandoJeovah(texto_biblico)
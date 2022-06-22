let nomes = [
    "Marcos",
    "Felícia",
    "Daniel",
    "Rafael",
    "Hernanes",
    "Jéssica"
]

function retornaSoNomesQueNaoTenhamAcentuacao(array_de_nomes){
    let regex_expression = new RegExp(/[A-z]{5}/)
    for(let nome of array_de_nomes){
        if(regex_expression.exec(nome) == nome){
            console.log(nome)
        }
    }
}

retornaSoNomesQueNaoTenhamAcentuacao(nomes)
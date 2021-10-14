let anoBissexto = ano => {
    
    let resultado;
    
    if (ano <= 2024 && ano - 4 == 2020) {
        resultado = `O ano de ${ano} é um ano bissexto!`;
    } else if (ano > 2024 && (ano - 2024) % 4 == 0) {
        resultado = `O ano de ${ano} é um ano bissexto!`;
    } else if (ano < 2020 && (ano - 2020) % 4 == 0) {
        resultado = `O ano de ${ano} é um ano bissexto!`;
    } else {
        resultado = `O ano de ${ano} não é um ano bissexto!`;
    }

    return console.log(resultado);
}

anoBissexto(2024)
anoBissexto(2023)
anoBissexto(2026)
anoBissexto(2028)
anoBissexto(2424)
anoBissexto(2016)
anoBissexto(2017)
anoBissexto(1616)
const calcCrescimento = (crianca1, tx1, crianca2, tx2) => {
    let anos = 0;
    let criancaMenor;
    let taxaMenor;
    let criancaMaior;
    let taxaMaior
    let resultado;
    
    if (crianca1 > crianca2){
        criancaMenor = crianca2;
        taxaMenor = tx2;
        criancaMaior = crianca1;
        taxaMaior = tx1;
        console.log(`\nAs 2 crianças têm tamanhos diferentes:\nA 1ª Criança tem tamanho maior: ${criancaMaior.toFixed(2)}cm\nA 2ª Criança tem tamanho menor: ${criancaMenor.toFixed(2)}cm`);
    } else if (crianca1 < crianca2){
        criancaMenor = crianca1;
        taxaMenor = tx1;
        criancaMaior = crianca2;
        taxaMaior = tx2;
        console.log(`\nAs 2 crianças têm tamanhos diferentes:\nA 1ª Criança tem tamanho menor: ${criancaMenor.toFixed(2)}cm\nA 2ª Criança tem tamanho maior: ${criancaMaior.toFixed(2)}cm`);
    } else {
        criancaMenor = crianca1;
        taxaMenor = tx1;
        criancaMaior = crianca2;
        taxaMaior = tx2;
        console.log(`\nAs 2 crianças têm tamanhos idênticos:\nA 1ª Criança tem: ${criancaMenor.toFixed(2)}cm\nA 2ª Criança tem: ${criancaMaior.toFixed(2)}cm`);
    }
    
    while (criancaMenor <= criancaMaior && anos < 8) {
        anos++;
        console.log(`\n${anos}ºano:`)
        criancaMenor += taxaMenor;
        console.log(`Criança menor: ${criancaMenor.toFixed(2)}cm`)
        criancaMaior += taxaMaior;
        console.log(`Criança maior: ${criancaMaior.toFixed(2)}cm`)
    }

    if (criancaMenor < criancaMaior) {
        resultado = `\nA criança menor nunca ultrapassou a criança maior em ${anos} anos, suas alturas são: \nCriança Menor: ${criancaMenor.toFixed(2)}cm\nCriança Maior: ${criancaMaior.toFixed(2)}cm`
    } else {
        resultado = `\nA criança menor ultrapassou a criança maior em ${anos} anos, suas alturas são: \nCriança Menor: ${criancaMenor.toFixed(2)}cm\nCriança Maior: ${criancaMaior.toFixed(2)}cm`
    }

    return console.log(resultado);
}

calcCrescimento(120, 8, 130, 6)
calcCrescimento(150, 8, 130, 7)
calcCrescimento(145, 8, 130, 9)
calcCrescimento(145, 8, 145, 9)
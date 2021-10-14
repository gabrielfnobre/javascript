const quaisCedulas = valor => {

    let resultado = [];
    let i = 0;
    let guardaResto = valor;
    
    console.log(`Só possuímos cédulas de R$:100, 50, 10, 5 e 1...\nPara que você possa sacar R$ ${valor},00 você deve pegar:`)

    while(guardaResto >= 1) {
        if (guardaResto >= 100){
            resultado[i] = `${(guardaResto - (guardaResto % 100)) / 100} nota(s) de R$ 100,00`;
            guardaResto -= ((guardaResto - (guardaResto % 100)) / 100) * 100;
            i++
        } else if (guardaResto >= 50) {
            resultado[i] = `${(guardaResto - (guardaResto % 50)) / 50} nota(s) de R$ 50,00`;
            guardaResto -= ((guardaResto - (guardaResto % 50)) / 50) * 50;
            i++
        } else if (guardaResto >= 10) {
            resultado[i] = `${(guardaResto - (guardaResto % 10)) / 10} nota(s) de R$ 10,00`;
            guardaResto -= ((guardaResto - (guardaResto % 10)) / 10) * 10;
            i++
        } else if (guardaResto >= 5) {
            resultado[i] = `${(guardaResto - (guardaResto % 5)) / 5} nota(s) de R$ 5,00`;
            guardaResto -= ((guardaResto - (guardaResto % 5)) / 5) * 5;
            i++
        } else if (guardaResto >= 1) {
            resultado[i] = `${(guardaResto - (guardaResto % 1)) / 1} nota(s) de R$ 1,00`;
            guardaResto -= ((guardaResto - (guardaResto % 1)) / 1) * 1;
            i++
        }
    }

    return console.log(resultado);

}

quaisCedulas(27)
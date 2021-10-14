const calculaAnuidade = mes => {

    let valor = 100.00;

    for (let i = 2; i <= mes; i++) {
        valor *= 1.05;
    }

    return console.log(`A anuidade a ser paga para este mês é de R$ ${valor.toFixed(2)}`);

}

calculaAnuidade(1)
calculaAnuidade(2)
calculaAnuidade(3)
calculaAnuidade(4)
calculaAnuidade(5)
calculaAnuidade(6)
calculaAnuidade(7)
calculaAnuidade(8)
calculaAnuidade(9)
calculaAnuidade(10)
calculaAnuidade(11)
calculaAnuidade(12)
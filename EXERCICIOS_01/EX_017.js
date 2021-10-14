let aumentoPlano = (plano, salario) => {
    
    let resultado;
    
    switch(plano) {
        case 'a':
            resultado = `O funcionário pertence ao plano ${plano.toUpperCase()}: recebendo um aumento de 10%, portanto, seu salário vai de ${salario.toFixed(2)} para ${(salario * 1.1).toFixed(2)}`
            break;
        case 'b':
            resultado = `O funcionário pertence ao plano ${plano.toUpperCase()}: recebendo um aumento de 15%, portanto, seu salário vai de ${salario.toFixed(2)} para ${(salario * 1.15).toFixed(2)}`
            break;
        case 'c':
            resultado = `O funcionário pertence ao plano ${plano.toUpperCase()}: recebendo um aumento de 20%, portanto, seu salário vai de ${salario.toFixed(2)} para ${(salario * 1.2).toFixed(2)}`
            break;
        default:
            resultado = `Esse plano não existe, só temos planos: A, B e C`
    }

    return console.log(resultado);
}

aumentoPlano('a', 1000)
aumentoPlano('b', 1000)
aumentoPlano('c', 1000)
aumentoPlano('super', 1000)
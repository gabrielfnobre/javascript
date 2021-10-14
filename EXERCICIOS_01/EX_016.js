let calculadora = (n1, operacao, n2) => {
    
    let resultado;
    
    switch(operacao) {
        case '+':
            resultado = `${n1} ${operacao} ${n2} = ${n1 + n2}`
            break;
        case '-':
            resultado = `${n1} ${operacao} ${n2} = ${n1 - n2}`
            break;
        case '*':
            resultado = `${n1} ${operacao} ${n2} = ${n1 * n2}`
            break;
        case '/':
            resultado = `${n1} ${operacao} ${n2} = ${n1 / n2}`
            break;
        default:
            resultado = `A calculadora não faz esse tipo de operação, tente: "+", "-", "*" ou "/" ...`
    }

    return console.log(resultado);
}

calculadora(2, '+', 3)
calculadora(2, '-', 3)
calculadora(2, '*', 3)
calculadora(2, '/', 3)
calculadora(2, '**', 3)
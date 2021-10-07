function calcula4Operacoes(x, y) {
    let soma = x + y;
    let subtrai = x - y;
    let divide = x / y;
    let multiplica = x * y;
    return `
        Você nos apresentou os números: ${x} e ${y}
        A soma destes valores é: ${soma}
        A subtração destes valores é: ${subtrai}
        A divisão destes valores é: ${divide}
        A multiplicação destes valores é: ${multiplica}
    `
}

console.log(calcula4Operacoes(5, 5));
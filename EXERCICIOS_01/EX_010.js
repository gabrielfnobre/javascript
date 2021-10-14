let ehDivisivelPor3 = num => {

    let resultado;

    if (num % 3 == 0) {
        resultado = `O número ${num} é divisível por 3`;
    } else {
        resultado = `O número ${num} não é divisível por 3`
    }

    return console.log(resultado);
}

ehDivisivelPor3(3)
ehDivisivelPor3(15)
ehDivisivelPor3(27)
ehDivisivelPor3(25)
ehDivisivelPor3(208)
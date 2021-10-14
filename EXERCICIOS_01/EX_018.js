let voltaExtenso = num => {

    let resultado;

    switch(num) {
        case 0:
            resultado = `zero`;
            break;
        case 1:
            resultado = `um`;
            break;
        case 2:
            resultado = `dois`;
            break;
        case 3:
            resultado = `três`;
            break;
        case 4:
            resultado = `quatro`;
            break;
        case 5:
            resultado = `cinco`;
            break;
        case 6:
            resultado = `seis`;
            break;
        case 7:
            resultado = `sete`;
            break;
        case 8:
            resultado = `oito`;
            break;
        case 9:
            resultado = `nove`;
            break;
        case 10:
            resultado = `dez`;
            break;
        default:
            resultado = `Número está fora do intervalo de 0 a 10`
    }

    return console.log(resultado);

}

voltaExtenso(0)
voltaExtenso(1)
voltaExtenso(2)
voltaExtenso(3)
voltaExtenso(4)
voltaExtenso(5)
voltaExtenso(6)
voltaExtenso(7)
voltaExtenso(8)
voltaExtenso(9)
voltaExtenso(10)
voltaExtenso(11)
let vendedorDeCarros = modelo => {
    
    let resultado;
    
    switch(modelo) {
        case 'hatch':
            resultado = `A compra do ${modelo} foi efetuada com sucesso!`
            break;
        case 'sedan':
            resultado = `Você escolheu ${modelo}. Tem certeza que não prefere o modelo hatch?`
            break;
        case 'motocicleta':
            resultado = `Você escolheu ${modelo}. Tem certeza que não prefere o modelo hatch?`
            break;
        case 'caminhonete':
            resultado = `Você escolheu ${modelo}. Tem certeza que não prefere o modelo hatch?`
            break;
        default:
            resultado = `Não trabalhamos com esse tipo de automóvel aqui.`
    }

    return console.log(resultado);
}

vendedorDeCarros('hatch')
vendedorDeCarros('sedan')
vendedorDeCarros('motocicleta')
vendedorDeCarros('caminhonete')
vendedorDeCarros('esportivo')
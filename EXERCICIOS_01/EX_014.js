let vendedorDeFrutas = fruta => {
    
    let resultado;
    
    switch(fruta) {
        case 'maçã':
            resultado = `Não vendemos ${fruta} aqui!`
            break;
        case 'kiwi':
            resultado = `Estamos com escassez de ${fruta}s.`
            break;
        case 'melância':
            resultado = `Aqui está sua ${fruta}, são R$ 3,00 o quilo.`
            break;
        default:
            resultado = `Não temos essa fruta! Só temos maçã, melância e kiwi.`
    }

    return console.log(resultado);
}

vendedorDeFrutas('maçã')
vendedorDeFrutas('melância')
vendedorDeFrutas('kiwi')
vendedorDeFrutas('banana')
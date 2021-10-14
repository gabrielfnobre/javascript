let lanchonete = (codigo, quantidade) => {

    let resultado;

    switch(codigo){
        case 100:
            resultado = `Você escolheu ${quantidade} Cachorro Quente(s) de R$ 3,00, o valor total a pagar é R$ ${(3.0 * quantidade).toFixed(2)}...`
            break;
        case 200:
            resultado = `Você escolheu ${quantidade} Hambúrguer(s) Simples de R$ 4,00, o valor total a pagar é R$ ${(4.0 * quantidade).toFixed(2)}...`
            break;
        case 300:
            resultado = `Você escolheu ${quantidade} Cheesseburguer(s) de R$ 5,50, o valor total a pagar é R$ ${(5.5 * quantidade).toFixed(2)}...`
            break;
        case 400:
            resultado = `Você escolheu ${quantidade} Bauru(s) de R$ 7,50, o valor total a pagar é R$ ${(7.5 * quantidade).toFixed(2)}...`
            break;
        case 500:
            resultado = `Você escolheu ${quantidade} Refrigerante(s) de R$ 3,50, o valor total a pagar é R$ ${(3.5 * quantidade).toFixed(2)}...`
            break;
        case 600:
            resultado = `Você escolheu ${quantidade} Suco(s) de R$ 2,80, o valor total a pagar é R$ ${(2.8 * quantidade).toFixed(2)}...`
            break;
        default:
            resultado = `Não temos nenhum produto com este código, por favor escolha outro`
    }

    return console.log(resultado);

}

lanchonete(100, 2)
lanchonete(200, 2)
lanchonete(300, 2)
lanchonete(400, 2)
lanchonete(500, 2)
lanchonete(600, 2)
lanchonete(700, 2)
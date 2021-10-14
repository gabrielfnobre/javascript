const convenioValues = idade => {

    let resultado;

    if (idade <= 10){
        resultado = `O conveniado tem ${idade} de idade, por isso deve pagar R$ 180,00.`
    } else if (idade <= 30 && idade > 10){
        resultado = `O conveniado tem ${idade} de idade, por isso deve pagar R$ 150,00.`
    } else if (idade <= 60 && idade > 30){
        resultado = `O conveniado tem ${idade} de idade, por isso deve pagar R$ 195,00.`
    } else {
        resultado = `O conveniado tem ${idade} de idade, por isso deve pagar R$ 230,00.`
    }

    return console.log(resultado);

}

convenioValues(10);
convenioValues(30);
convenioValues(60);
convenioValues(80);
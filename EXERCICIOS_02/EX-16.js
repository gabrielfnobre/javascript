const oAnoEhBissexto = ano => {
    const divisivelPorQuatro = ano % 4 === 0
    const divisivelPorCem = ano % 100 === 0
    const divisivelPorQuatrocentos = ano % 400 === 0
    return divisivelPorQuatrocentos || (divisivelPorQuatro && !divisivelPorCem)
}

console.log(oAnoEhBissexto(2020))
console.log(oAnoEhBissexto(2100))
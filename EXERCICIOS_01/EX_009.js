function recebeNotas(nota) {
    notaFinal = 0;
    if (nota % 5 == 0) {
        notaFinal = nota;
    } else {
        let completador = 5 - (nota % 5);
        if (completador < 3 && nota >= 38) {
            notaFinal = nota + completador;
        } else {
            notaFinal = nota;
        }
    }

    if (notaFinal >= 40) {
        console.log(`Você está aprovado, sua nota final foi: ${notaFinal}`);
    } else {
        console.log(`Você foi reprovado, sua nota final é: ${notaFinal}`);
    }
}

recebeNotas(42)
recebeNotas(38)
recebeNotas(37)
recebeNotas(84)
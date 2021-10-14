const mediaPonderada = (codigoAluno, n1, n2, n3) => {

    let resultado;
    let media;

    if (n1 > n2 && n1 > n3){
        media = ((n1 * 4) + (n2 * 3) + (n3 * 3)) / 10;
    } else if (n2 > n1 && n2 > n3){
        media = ((n2 * 4) + (n1 * 3) + (n3 * 3)) / 10;
    } else {
        media = ((n3 * 4) + (n1 * 3) + (n2 * 3)) / 10;
    }

    if (media < 5) {
        resultado = `O aluno de código: ${codigoAluno}, obteve a média ${media.toFixed(1)}, portando ele está REPROVADO!`;
    } else {
        resultado = `O aluno de código: ${codigoAluno}, obteve a média ${media.toFixed(1)}, portando ele está APROVADO!`;
    }

    return console.log(resultado);
}

mediaPonderada('0032', 5, 4, 2)
mediaPonderada('0043', 3, 10, 8)
mediaPonderada('0084', 5, 7, 9)
mediaPonderada('0038', 5, 5, 5)
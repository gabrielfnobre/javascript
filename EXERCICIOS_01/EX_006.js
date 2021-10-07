const calculaBhaskara = (ax2, bx, cIndependente) => {
    console.log(`\nSua Equação de 2º Grau é: ${ax2}x² + ${bx}x + ${cIndependente} = 0`);
    if (ax2 <= 0) {
        console.log("Essa equação não pode ser calculada, pois o coeficiente \"a\" de uma equação do 2º Grau não pode ser zero ou menor que zero...")
    } 
    else {
    let a = Math.pow(ax2, 2);
    let b = bx;
    let c = cIndependente;

    let delta = (Math.pow(b, 2)) - (4 * a * c);

    if (delta < 0) {
        console.log(`O delta deu um valor negativo: ${delta}`);
    } else if (delta > 0) {
        console.log(`O delta deu valor positivo: ${delta}`);
    }

    let bhaskaraMinus = (-b - (Math.sqrt(delta))) / (2 * a);
    let bhaskaraPlus = (-b + (Math.sqrt(delta))) / (2 * a);

    console.log(`
    Os Resultados possíveis para a sua equação são: 
    Para Raiz Delta Positiva (1 Linha): ${bhaskaraPlus}
    Para Raiz Delta Negativa (2 Linha): ${bhaskaraMinus}
    `)
    } 
}

calculaBhaskara(1, -10, 24);
calculaBhaskara(1, 6, -48);
calculaBhaskara(0, 23, 3);
calculaBhaskara(3, -5, 12)
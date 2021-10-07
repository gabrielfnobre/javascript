function queTrianguloEh(x, y, z) {
    if ((x - y) < z  && z < (x + y) && (x - z) < y && y < (x + z) && (z - y) < x &&  x < (z + y)){
        if (x == y && x == z) {
            console.log(`
            O seu Triângulo é "Equilátero" pois todos os lados equivalem ao valor ${x}
            `)
        } else if (x == y || x == z || y == z) {
            console.log(`
            O seu Triângulo é "Isósceles", pois possuí 2 lados com valores iguais.
            Seus valores correspondem a: ${x}, ${y} e ${z}.
            `)
        } else {
            console.log(`
            O seu Triângulo é "Escaleno", pois todos os lados são diferentes.
            Seus valores correspondem a: ${x}, ${y} e ${z}.
            `)
        }
    } else {
        console.log("Com esses valores não podemos ter um triângulo")
    }
}

queTrianguloEh(5, 10, 9);
queTrianguloEh(10, 10, 10);
queTrianguloEh(5, 9, 9);
queTrianguloEh(9, 1, 5);
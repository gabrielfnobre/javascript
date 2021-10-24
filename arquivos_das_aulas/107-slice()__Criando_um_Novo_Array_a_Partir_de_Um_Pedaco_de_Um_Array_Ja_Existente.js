//SLICE():
//O método "slice()" - literalmente traduzido por "pedaço" ou "fatia" - é um método interno do Array que por assim dizer gera um novo array á partir de um pedaço de um array já existente.
//Com o slice() é possível escolher se desejamos pegar uma parte do array a partir de um ponto até o seu final, ou se desejamos pegar uma parte do array á partir de um determinado ponto inicial até um determinado ponto antes do índice final.
//Vejamos alguns exemplos:

//GERANDO NOVO ARRAY Á PARTIR DE UMA PARTE DO ARRAY ATÉ O FINAL:
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa', 'Bottas', 'Verstapen']
const quartaPosicaoEmDiante = pilotos.slice(3) //Se desejamos gerar um novo array á partir de um determinado valor índice até o final, basta colocar o valor índice e teremos um novo array á partir daquele índice até o final...
console.log('1)', quartaPosicaoEmDiante)



//GERANDO NOVO ARRAY ENTRE UMA POSIÇÃO NO ÍNICIO E NO FINAL DO ARRAY:
const posicaoEntre = pilotos.slice(3, 5) //Colocamos o primeiro valor índice que desejamos capturar, e depois colocamos o valor índice onde desejamos parar de capturar, pois o valor 5 não será incluso no slice, os valores inclusos irão somente até o valor 4, por isso podemos dizer que o valor final que colocamos é sempre aquele onde desejamos parar de ver...
console.log('\n2)', posicaoEntre)



//GERANDO NOVO ARRAY Á PARTIR DO ÍNICIO ATÉ UM DETERMINADO VALOR:
const vencedores = pilotos.slice(0, 3) //Digamos que desejamos ver somente os 3 primeiros colocados, para isso colocamos o valor inicial á partir do índice 0 para aparecer o 1º valor, e depois o índice onde desejamos parar de ver, que é o índice 3, tornando visíveis só os índices 0, 1 e 2...
console.log('\n3)', vencedores)
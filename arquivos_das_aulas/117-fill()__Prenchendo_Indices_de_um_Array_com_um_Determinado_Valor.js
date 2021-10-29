//FILL():
//O método "fill()" é um método do Array usado para prencher os índices de um array com um mesmo valor. Podemos usá-lo de três formas:
/*
        *Prechendo todos os índices com o mesmo valor: fill(valor) vamos usar só um parâmetro que é o valor 
        *Prechendo alguns índices com o mesmo valor de um ponto inicial até o fim do índice: fill(valor, valorInicial)      
                automáticamente os valores á partir do índice inicial que foi passado serão preenchidos até o índice final
        *Prenchendo alguns índices com o mesmo valor de um ponto inicial até um ponto final antes do fim dos índices: fill(valor, valorInicial, valorFinal) onde o valor final não entrará no ciclo de repetição do valor, ele sempre pára um valor antes.
 */
//DETALHE IMPORTANTE!!! O fill muda o array original!!! Então tenha cuidado ao usar o fill...

//PRENCHENDO TODO UM ARRAY COM O MESMO VALOR:
console.log('1)', [1, 2, 3].fill('repete'))



//PRENCHENDO Á PARTIR DE UM VALOR INICIAL ATÉ O FINAL:
const arrayNovo = [1, 2, 3, 4, 5]
console.log('\n2)', arrayNovo.fill('repete', 2)) //Perceba que á partir do índice 2 todos os valores serão repetidos...



//PRENCHENDO Á PARTIR DE UM VALOR INICIAL ATÉ PONTO FINAL:
console.log('\n3)', arrayNovo.fill(4, 1, 4)) //Perceba que o valor de índice 4 não entra no preenchimento, e o último índice continua com o valor "repete" por que o fill muda o array original...
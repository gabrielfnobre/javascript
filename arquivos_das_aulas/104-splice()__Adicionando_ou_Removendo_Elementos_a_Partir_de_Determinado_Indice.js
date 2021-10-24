//SPLICE():
//O método "splice()" - literalmente traduzido por "emendar" - é um método interno do Array onde podemos adicionar ou remover elementos á partir de um determinado valor índice.
//Para isso o splice() trabalha com 3 parâmetros:
/*
        * 1º Mostra á partir de que valor índice desejamos operar 
        * 2º Mostra á quantidade de valores que desejamos excluir 
        * 3º São os valores que desejamos adicionar, podemos colocar quantos quisermos e eles vão ser atribuídos em 
           sequência a partir do valor índice pré-determinado na posição indicada no parâmetro 1º do splice() 
 */
//Vejamos alguns exemplos:

//REMOVENDO VALORES A PARTIR DE UM DETERMINADO VALOR ÍNDICE:
const num = [1, 2, 3, 4, 5, 6, 7, 8]
num.splice(1, 2) //Veja que usamos só 2 parâmetros, queremos dizer aqui que á partir do índice 1 que equivale ao valor "2" vamos remover 2 índices...
console.log('1)', num) //Perceba que 2 e 3 foram removidos...



//ADICIONANDO VALORES COM SPLICE:
num.splice(2, 0, 2, 3) //Perceba que agora adicionamos elementos, onde o primeiro valor indicou o índice 2, ou seja, á partir do valor "4" serão adicionados os valores 2 e 3, e se não quisermos que nenhum valor seja removido temos de usar o valor 0 no segundo parâmetro...
console.log('\n2)', num)
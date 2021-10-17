//STRINGS:
//São cadeias de caracteres que podem se comportar como se fossem arrays, temos inclusive várias funções que podem percorrer essas cadeias e trazer resultados para nós dentro de uma string, ou fazer tarefas especiais com elas...

//ESCREVENDO STRINGS COMUNS//
let nome = 'Caderno '; //Podemos usar aspas simples
let categoria = "Papelaria "; //aspas duplas
let nomeCat = `Rubões`; //ou crases (Usamos mais quando desejamos colocar template strings)


//CONCATENANDO STRINGS COM O SINAL DE +:
console.log(nome + categoria + nomeCat);


//CONCATENANDO STRINGS POR ATRAVÉS DE UMA FUNÇÃO:
console.log('\nGabriel'.concat(' Ferreira ').concat('Nobre')); //Veja que usando concat() foi possível concatenar palavras sem usar o sinal de +...
console.log(nome.concat(categoria).concat(nomeCat)); //Podemos fazer o mesmo se as strings estiverem dentro de variáveis...


//MESCLANDO STRINGS COM VARIÁVEIS USANDO O SINAL DE +:
console.log(
    "\nProduto: " + nome + ";\n" +
    "Departamento: " + categoria + ";"
)


//MESCLANDO STRINGS COM NUMBERS:
console.log('\n');
console.log(1 + 1); //Sem formatação de String
console.log("1" + 1); //Sem formatação de String


//FUNÇÃO QUE PERCORRE UMA STRING EM BUSCA DE UMA DETERMINADA LETRA:
//podemos usar a função charAt(), que vai percorrer a string em busca de um caracter que ocupe determinado número índice.
console.log('\n')
console.log(("carrinho").charAt(4)); //Podemos usá-la colocando a String diretamente, seguido pela função...
let objeto = 'mesa';
console.log(objeto.charAt(0)); //Podemos passá-la também por através de uma variável...
//OBSERVAÇÃO: a função charAt() não retorna erro se for colocado um valor índice que a string não o tenha...
console.log("O valor é: " + objeto.charAt(10)); //Perceba que é retornado uma string em vazio...


//FUNÇÃO QUE TROCA UM DETERMINADO CARACTERE DENTRO DE UMA STRING POR UM CARACTERE DIFERENTE:
console.log('\nbatata'.replace('a', 'o')); //Perceba que somente o primeiro caracter foi trocado...
console.log('batata'.replace('t', 'o')); //Veja que agora o "t" que foi trocado...
console.log('G4br13l'.replace(4, 'o')); //se no meio da string tiver números, eles também serão trocados...
console.log('G4br13l'.replace(/\d/g, 'o')); //podemos usar regex, substituindo todos os números por um caracterer específico...
console.log('G4br13l'.replace(/\w/g, 'o')); //Ou trocar todas os caracteres por um específico...


//FUNÇÃO QUE PERCORRE UMA STRING DE DETERMINADO NÚMERO ÍNDICE ATÉ DETERMINADO NÚMERO ÍNDICE:
console.log("\nDo índice 1 em diante: " + objeto.substring(1)); //Vai mostrar somente os caracteres do índice 1 em diante...
console.log("Mostra do índice 0 até o 2: " + objeto.substring(0, 3)); //Vai mostrar á partir do índice 0 sem mostrar o valor do índice 3...


//FUNÇÃO QUE RETORNA O VALOR ÍNDICE DE UM DETERMINADO CARACTERE:
console.log("\nO valor índice é: " + objeto.indexOf('s')); //Veja que passamos o caractere dessa vez, e pedimos para a função encontrar o próximo índice que tivesse o valor "s".


//FUNÇÃO QUE TRANSFORMA UMA STRING EM ARRAY Á PARTIR DE UM DETERMINADO CARACTERE:
console.log("\nGabriel,Ferreira,Nobre".split(',')); //Aqui passamos a vírgula como delimitador...
console.log("Gabriel,Ferreira,Nobre".split('e')); //Aqui foi passado a letra "e"...
console.log("Gabriel,Ferreira,Nobre".split('i')); //Aqui foi passada a letra "i"...
console.log("Gabriel Ferreira Nobre".split(' ')); //Aqui foi passado o espaço em branco...


//FUNÇÃO QUE TRAZ O VALOR UNICODE DE UM CARACTER:
//temos uma função no javascript que retorna para nós o valor Unicode ou da Tabela ASCII de um determinado caractere...
console.log("\nO valor ASCII é: " + objeto.charCodeAt(1)); //O valor para a letra "e" é 101 em ASCII ou Unicode;



//NÃO USE STRINGS NUMÉRICAS PARA MEDIDA DE COMPARAÇÃO:
console.log("\nNote que Strings sempre irão comparar o 1º digito que aparecer...")
console.log(`1 é menor que 1? Resposta: ${'1' < '1'}`); //Quando comparamos um único dígito o valor dá certo...
console.log(`18 é menor que 2? Resposta: ${'18' < '2'}`); //Perceba que o primeiro dígito do 18 - no caso o "1" - é comparado com o número 2, por isso a resposta é que 18 é menor que 2...
console.log(`4 é maior que 33? Resposta: ${'4' > '33'}`); //Perceba que o primeiro dígito do 18 - no caso o "1" - é comparado com o número 2, por isso a resposta é que 18 é menor que 2...
//ABAIXO SEGUE UMA ESPÉCIE DE DICIONÁRIO DO REGEX:
//OBS: Ele começa com sinais de pontuação, números e depois letras

/* 

    .   =   O ponto "." é um meta-char universal que pode significar qualquer caractere.
    \   =   O escape "\" é usado para quando desejamos usar um meta-char especial ou um sinal comum sem ativar um ;
            meta-char;
    {}  =   As chaves "{}" são usadas para quando desejamos usar uma determinada quantidade de meta-chars, inclusive as
            chaves são chamadas de "quantifier" no ReGex;
    \d  =   O espape d "\d" é um meta-char para encontrar dígitos;


*/

//TARGET USADO EM TODOS OS EXEMPLO:
let targetDigitos = "João Almeida Augusto de Melo - Professor - Idade 36 - CPF 349.832.441-23 - RG 34.435.534-2 CNPJ 15.123.321/8883-22"


//USANDO PONTO:
let ExPonto = RegExp(/..\d/) //Perceba que o ponto vai pegar quaisquer 2 primeiros caracteres que estiverem antes do 1º 
                                //dígito que for encontrado...
console.log("Exemplo de Ponto: " + ExPonto.exec(targetDigitos)) //Usamos aqui a função "exec" do RegExp essa função 
                                                                    //retorna um array, onde o índice 0 é o resultado 
                                                                    //que procuramos, o índice 1 traz o valor índice do
                                                                    //resultado que procuramos, o valor 2 traz o target
                                                                    //completo. Mas quando usamos o exec concatenado com
                                                                    //uma string ele traz automáticamente o índice 0 da
                                                                    //função "exec". Além da função exec temos muitas 
                                                                    //outras, para mais informações consulte a 
                                                                    //especificação oficial no site
                                                                    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

//USANDO DÍGITOS: (Aqui a missão é encontrar o CPF)
let ExDigitos = RegExp(/\d\d\d\.\d\d\d\.\d\d\d-\d\d/) //Perceba que podemos colocar um "\d" um atrás do outro... 
let ExDigitos2 = RegExp(/\d{3}\.\d{3}\.\d{3}-\d{2}/) //Mas uma solução mais elegante seria usar o quantifier para 
                                                        //delimitar a quantidade de dígitos. Perceba também que estamos 
                                                        //usando o "\." para referenciar as pontuações do CPF

console.log("Exemplos de Dígitos: " + ExDigitos.exec(targetDigitos)) //Perceba que o resultado será o mesmo...
console.log("Exemplos de Dígitos: " + ExDigitos2.exec(targetDigitos))


//USANDO ESCAPE PARA PEGAR CARACTERES ESPECIAIS:
let ExBarra = RegExp(/\d{2}\.\d{3}.\d{3}\/\d{4}-\d{2}/) //Quando queremos a barra, temos que usar o escape junto com a
                                                            //barra, dessa forma "\/" para que consigamos referenciar a
                                                            //barra...

console.log("Exemplos de Barra: " + ExBarra.exec(targetDigitos)) //Aqui queremos como resultado o CNPJ da pessoa...
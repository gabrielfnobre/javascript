//isNaN():
//O método isNaN() serve para conferir se o valor de um determinado elemento ou o resultado de uma operação gera um NaN ou não, caso o NaN seja formado, a função retorna "true", agora se nenhum NaN for gerado ela retorna "false"...

//UTILIZANDO isNaN() PARA TESTE LÓGICO:
function confereNumber(a, b, c){
    a = isNaN(a) ? 'Esse valor não é um Número': 'É um número';
    b = isNaN(b) ? 'Esse valor não é um Número': 'É um número';
    c = isNaN(c) ? 'Esse valor não é um Número': 'É um número';
    return console.log(`
    ${a}
    ${b}
    ${c}`);
}

confereNumber(1, '42', 1); //Perceba o cuidado que devemos ter ao usar strings numéricas, elas podem ser convertidas para Number...
confereNumber('Australopitécos', '1', 32); //Perceba que strings não numéricas geram um NaN "true"...
confereNumber(true, false, undefined) //Perceba que valores booleanos podem ser convertidos por 1 e 0, que podem ser encarados como Numbers, enquanto undefined não é encarado como valor, gerando false...
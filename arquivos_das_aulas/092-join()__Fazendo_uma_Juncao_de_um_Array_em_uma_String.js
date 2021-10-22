//JOIN():
//O método join() faz com que todos os elementos de um arrray seja retornados em uma string.
//Join recebe um valor como parâmetro que será usado como separador dos elementos do array. Se nenhum valor for passado, join() simplesmente irá concatenar todos os valores separando-os com vírgula.
//É possível passar como parâmetro uma variável, cujo valor será convertido para uma string - se possível, ou podemos passar diretamente uma string que desejamos que fiquem entre os valores concatenados...

//JOIN SENDO USADO SEM NENHUM PARÂMETRO PASSADO:
const nome = ['Gabriel', 'Ferreira', 'Nobre']
console.log('1)', nome.join()) //Quando join() é usado sem passar parâmetros ele junta os valores separando-os pela vírgula...



//JOIN JUNTANDO VALORES COLADOS UM NO OUTRO:
console.log('\n2)', nome.join('')) //Quando usamos uma string vazia ela junta todos os valores colando um no outro...



//JOIN JUNTANDO VALORES COM UM SEPARADOR STRING ESPECÍFICO:
console.log('\n3)', nome.join('-')) //Veja que colocamos uma string específica que desejamos usar como separador...



//JOIN CAPTURANDO UM VALOR DE UMA VARIÁVEL E O TRANSFORMANDO EM UMA STRING:
const num = [1, 2, 3, 4, 5]
const valor = 2
console.log('\n4)', num.join(valor + ' ')) //Veja que separamos para cada valor o uso do 2 e um espaçamento...
console.log(typeof nome.join(valor + ' ')) //Mas no final tudo foi transformado em uma única string...
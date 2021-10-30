//PARSE():
//O "parse()" é um método que deve ser usado junto com a função Date para retornar o valor de uma data escrita no formato de string para o valor da mesma data em milissegundos:

//RETORNANDO STRING EM A DATA DE MILISSEGUNDOS:
const dataString = '2021-9-1'
const dataMili = Date.parse(dataString) //Perceba que trasformamos a string em milissegundos por causa o método parse()

console.log('Data String convertida para milissegundos:', dataMili)
console.log('Data em milissegundos é convertida para uma data instanciada:', Date(dataMili))
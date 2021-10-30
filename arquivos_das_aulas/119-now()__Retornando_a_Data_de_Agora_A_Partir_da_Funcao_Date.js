//NOW():
//O "now()" é um método que deve ser usado junto com a função Date para retornar o valor em milissegundos da data de agora:

//RETORNANDO A DATA DE AGORA EM MILISSEGUNDOS:
const dataAgora = Date.now()
const dataArmazenada = dataAgora
console.log('Data de agora em milissegundos:', dataAgora)
console.log('Data de agora convertida para o formato comum:', Date(dataAgora)) //Perceba que só instanciamos os milissegundos por através da função Date...
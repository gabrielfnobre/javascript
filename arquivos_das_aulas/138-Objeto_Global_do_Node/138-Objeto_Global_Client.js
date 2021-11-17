//IMPORTAÇÃO DE OBJETO GLOBAL:

//Note que só chamamos o objeto global, pois, como ele já se encontra no contexto global ele não precisa de ser chamado á partir de um objeto específico.
require('./138-Objeto_Global_do_Node')
console.log(minhaApp.saudacao())

//Veja que podemos modificar os valores de um objeto global, e que isso impactará todo arquivo que chamar o mesmo objeto...
minhaApp.nome = 'Eita, mudei!'
console.log(minhaApp.nome) //Veja que o nome não é mais 'Sistema Global'...
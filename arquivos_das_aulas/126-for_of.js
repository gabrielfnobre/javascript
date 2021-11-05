//FOR(OF):
//O laço "for(of)" é um laço usado especificamente para iteração em Arrays, esse laço cria uma iteração semelhante a do laço "for" e "for in", onde determinamos uma variável que irá capturar automáticamente todos os elementos de um array durante o laço de repetição.

//USANDO LAÇO FOR(OF) PARA CAPTURAR OS VALORES DE UM ARRAY:
//Perceba que criamos uma função que pega uma string para um assunto, se existe algum assunto relacionado dentro de um array de assuntos...
const pesquisar = (assunto, arrayDeAssuntos) => {
    let assuntosEncontrados = []
    for(let palavra of arrayDeAssuntos){ //Veja que dentro do for(of) criamos uma variável "palavra" que irá iterar sobre todos os valores do array "arrayDeAssuntos"
        if (palavra.includes(assunto)) //Usando "includes()" verificamos se o valor armazenado na variável "palavra" durante a iteração é incluso entre os valores do array iterado
        assuntosEncontrados.push(palavra) //Para cada iteração onde o includes() é verdadeiro o valor é adicionado ao array criado dentro da função e que será retornado...
    }

    return console.log(assuntosEncontrados)
}

pesquisar('pro', ['programação', 'mobile', 'profissional'])
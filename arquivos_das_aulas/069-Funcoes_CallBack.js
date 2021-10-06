//FUNÇÕES CALLBACK:
//Funções CallBack são funções que são criadas para serem chamadas sempre que necessário, para executar algum comportamento num dado momento da execução.
//Na programação em geral usa-se muito funções callback, vamos ver alguns exemplos:

//USANDO FUNÇÃO CALLBACK PARA ITERAR VALORES E ÍNDICES DE UM ARRAY:
let marcasDeCarros = ['Mercedes', 'BMW', 'Audi']; //Temos um array com nomes de marcas de carros...

function funcaoCallBack(nome, indice) { //Aqui temos uma função call back que será chamada a cada laço de iteração da função forEach() mais a frente...
    console.log(`${indice + 1}. ${nome}`); //A cada laço os valores de índice e os dados do array serão impressos...
}

marcasDeCarros.forEach(funcaoCallBack); //Perceba que usamos a função built-in forEach (usada em especial para iterar) para pegar como primeiro parâmetro os dados so array, e como segundo parâmetro o valor índice do array. A função funcaoCallBack é uma CallBack por que ele têm somente esse objetivo, ser chamada de volta toda vez que for necessária...



//VANTAGENS DO USO DE CALLBACK...
//Usar callbacks pode facilitar muito mais a nossa codificação, pois vamos usar muito menos linhas de código que iremos reaproveitar código.
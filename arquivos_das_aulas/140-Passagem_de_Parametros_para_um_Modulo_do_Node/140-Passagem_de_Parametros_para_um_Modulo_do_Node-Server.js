//PASSAGEM DE PARÂMETROS PARA UM MÓDULO DO NODE:

//Sempre que falamos em "passagem de parâmetros", estamos nos referindo a uma função, como poderíamos passar parâmetros para uma ou mais funções existentes dentro de um módulo do Node?
//Isso é possível por através de uma função criada por atribuição diretamente no módulo exports, vejamos como:

//CRIANDO UMA FUNÇÃO QUE RECEBE PARÂMETROS DENTRO DE UM MÓDULO DO NODE:
//Abaixo, atribuímos diretamente ao módulo uma função que recebe uma lista de nomes e retorna cada nome junto com a saudação como valores de um array...
module.exports = function saudacao(...nomes) {
    return nomes.map(nome => `Bom dia ${nome}!`) //Caso desejássemos, poderíamos acrescentar funções que recebessem os parâmetros passados, filtrassem e adicionassem outros comportamentos, tudo vai da nossa imaginação...
}

//Para ver como fica o resultado veja a lição 140-Passagem_de_Parametros_para_um_Modulo_do_Node-Client.js...
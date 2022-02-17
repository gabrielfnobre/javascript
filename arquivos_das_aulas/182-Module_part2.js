//MODULES:

//Aqui nós podemos ver como fazemos para que os nossos elementos sejam exportados, temos que usar a palavra reservada "exports" se usarmos essa palavra sobre um determinado elemento "mãe" todos os elementos dentro do mesmo escopo também serão exportados:

export class Pessoa {
    constructor(nome, cpf, rg, ){
        this.nome = nome
        this.cpf = cpf
        this.rg = rg
    }
    
    dadosPessoais(){ //Método gerado só para mostrar os dados pessoais da pessoa...
        console.log(`
        Nome: ${this.nome}
        CPF: ${this.cpf}
        RG: ${this.rg}
        `)
    }
}

//OBS: Se um elemento não tiver "export" ele não poderá ser acessado.
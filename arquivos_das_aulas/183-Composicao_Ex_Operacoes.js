//CLASSE CRIADA COMO EXEMPLO PARA GERAR UMA COMPOSIÇÃO

//Perceba que por ser uma composição não temos nenhuma chamada para os métodos da classe "Operadores", invés disso todas as chamadas dos métodos estão a cargo da classe principal...
export class Operacoes {
    constructor(cliente, conta){ //a classe Operadores recebe o objeto gerado na classe cliente e na classe conta
        this._cliente = cliente
        this._conta = conta
        this._saldo = conta._saldo //Extraído só o saldo para trabalharmos com maior facilidade...
    }

    deposito(valor){
        this._saldo += valor
        console.log(`\nVocê depositou R$ ${valor.toFixed(2)}`)
        console.log(`Saldo atual R$ ${this._saldo.toFixed(2)}`)
    }

    saque(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            console.log(`\nSaldo restante de ${this._cliente.nome} R$ ${this._saldo.toFixed(2)}`)
        } else {
            console.log(`\nSeu saldo é insuficiente para sacar ao valor de R$ ${valor.toFixed(2)}`)
            console.log(`Saldo atual R$ ${this._saldo.toFixed(2)}`)
            console.log(`Se deseja sacar mesmo assim use o comando saqueCredito()`)
        }
    }

    saqueCredito(valor){
        this._saldo -= valor
        console.log(`\nSaldo restante de ${this._cliente.nome} R$ ${this._saldo.toFixed(2)}`)
    }

    verSaldo(){
        console.log(`\nSaldo: R$ ${this._saldo.toFixed(2)}`)
    }

    //Aqui está o pulo do gato da composição...
    transferencia(valor, recebedor){ //a variável recebedor recebe o cliente 2, porém note que ele não foi chamado por através de um relacionamento de composição - como acontece com o cliente 1 - e sim por associação, embora tenhamos acesso aos dados do cliente 2 não podemos alterar nenhum atributo dele, somente do cliente 1. 
        console.log(`Fazendo transferência de ${this._cliente.nome} para ${recebedor.cliente.nome}`)
        if(this._saldo >= valor){
            this.saque(valor) //O cliente 1 realmente vai ter os 500 extraídos da sua conta, por ele tem um relacionamento de composição e agregação...
            recebedor._saldo += valor
            console.log( //Parece que Ana vai receber 500 e ficar com 1500, mas isso não vai acontecer com o objeto original.
            `Transferência Bem Sucedida!
            Ana recebeu R$ ${valor.toFixed(2)}
            `
            )
        } else {
            console.log('Saldo insuficente para fazer a transferência.')
        }
    }
}

//Retorne no arquivo da classe principal para ver que foram tirados 500 de Ricardo, mas não foram creditados 500 em Ana.
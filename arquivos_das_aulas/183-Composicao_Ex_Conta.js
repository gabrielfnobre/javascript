//CLASSE CRIADA COMO EXEMPLO PARA GERAR UMA COMPOSIÇÃO

export class ContaCorrente {
    constructor(cliente, conta, agencia, saldo){
        this.cliente = cliente
        this.conta = conta
        this.agencia = agencia
        
        this._saldo = saldo
    }
}
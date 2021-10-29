const objeto = {a: 1, b: 2}
const objetoDescript = {id:20, nome: "caneta", descricao: 'Não preenchido'}

const removedorDePropriedade = (objeto, propriedade) => {
    let newObject = objeto
    let property = propriedade
    delete newObject[property]
    return console.log(newObject, `Esse é o mesmo objeto?: ${Object.is(this.objeto, newObject)}`)
}

removedorDePropriedade(objeto, 'a')
removedorDePropriedade(objetoDescript, 'descricao')
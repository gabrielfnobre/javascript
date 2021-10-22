//FUNÇÃO ISEXTENSIBLE():
//A função isExtensible() verifica se um objeto criado pode ser extendido - ou seja, pode receber chaves novas - ou não...
const produto = Object.preventExtensions(
    { nome: 'Qualquer', preco: 1.99 }
)
console.log('\n2)', Object.isExtensible(produto)) //Usamos ela sempre após o Object, assim como a preventExtensions(), ela vai retornar "true" se o objeto for extensível ou "false" se o objeto não for extensível...


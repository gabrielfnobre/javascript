//MIDDLEWARE:

//Abaixo temos um exemplo simples da implementação de um Middleware Pattern:
//Perceba abaixo que temos uma função para cada passo, á cada passo um valor string é implementado num objeto chamado "ctx", além disso, os passos também receberão uma função "next" que será chamada ao final de cada passo...
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' //Somente o passo 3 não chamará uma próxima função...

//Abaixo temos a função "Handle" que dá início ao processo do middleware...
const execMiddle = (ctx, ...handles) => { //Perceba que a função recebe um objeto, e um conjunto de funções que serão as nossas handles, as funções serão executadas na ordem em que nós passamos as handles...
    const execPasso = indice => { //Dentro da função principal, temos uma função que recursiva que recebe um valor índice que será responsável por capturar os valores das funções passados ao rest "...handles"
        handles && indice < handles.length && handles[indice](ctx, () => execPasso(indice + 1)) //Essa função compara se handles é verdadeiro, pois se não houver nenhuma função passada, não tem por que executar a handle principal, também compara se o valor índice passado na chamada da função execPasso() não ultrapassa a quantidades de funções que existem no array gerado pelo rest "...handles" e por fim executa a função equivalente ao valor índice e recebe como next a recursividade da função execPasso, que vai executar a próxima função indice de passada no rest de "...handles"
    }
    execPasso(0)
}

//Percebaque podemos executar as funções na ordem que quisermos...
//Executando as handles em ordem de passo...
const ctx1 = {}
execMiddle(ctx1, passo1, passo2, passo3)
console.log(ctx1)

//Executando as handles começando pelo passo 2...
const ctx2 = {}
execMiddle(ctx2, passo2, passo1, passo3)
console.log(ctx2)

//Executando as handles iniciando pelo passo 3, um passo que não irá chamar nenhum next()...
const ctx3 = {}

execMiddle(ctx3, passo3, passo2, passo1)
console.log(ctx3)
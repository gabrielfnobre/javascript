//DELETE:
//É uma palavra reservada do Javascript que utilizamos para quando queremos deletar valores de um object ou de um array.
//O delete também pode apagar variáveis declaradas implicitamente, mas ele não apaga variáveis declaradas com var, let ou const.
//Quando o operador delete é bem-sucedido em apagar uma variável ele define a propriedade ou elemento para undefined.
//Caso desejemos saber se é possível apagar determinado elemento podemos usar o delete dentro de um console, onde ele irá retornar true se a operação for possível ou false se a operação não for possível. DETALHE IMPORTANTE, quando usado dentro do console ele não apaga um elemento de fato, ele para apagar ele deve ser usado implicitamente na linha de código.


//RETIRANDO VALORES DE UM ÍNDICE:
const VALORES = [1, 2, 3, 4, 5];
console.log(`1) ${VALORES}`);
delete VALORES[0]; //Usando a propriedade delete podemos remover o valor de um índice, porém o índice ainda continuará lá...
delete VALORES[1];
delete VALORES[2];
delete VALORES[3];
delete VALORES[4];
console.log(`2) ${VALORES}`);



//APAGANDO ELEMENTOS DE UM ARRAY...
let objeto = {frase: 'Oi eu existo', frase2: 'Até agora'};
console.log('\n3)', objeto);

delete objeto.frase2; //Usando delete para apagar uma chave dentro de um objeto...
console.log('3)', objeto);
delete objeto.frase; //Usando delete para apagar outra chave de um objeto...
console.log('3)', objeto);



//VENDO OPERACOES POSSÍVEIS COM DELETE:
x = 42; //Declarada implicitamente...
console.log('\n4)', x);
let y = 43; //Declarada com let
console.log('4)', y);
meuobj = new Number(); //Instanciando objeto...
meuobj.h = 4;    // cria a propriedade h
console.log('4)', meuobj.h);
console.log('\n4)', delete x);        // retorna true (pode apagar se declarado implicitamente)
console.log('4)', delete y);        // retorna false (não pode apagar se declarado com var)
console.log('4)', delete Math.PI);  // retorna false (não pode apagar propriedades predefinidas)
console.log('4)', delete meuobj.h); // retorna true (pode apagar propriedades definidas pelo usuário)
console.log('4)', delete meuobj);   // retorna true (pode apagar se declarado implicitamente)
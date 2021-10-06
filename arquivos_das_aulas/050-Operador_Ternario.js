//OPERADOR TERNÁRIO:
//O operador ternário é um operador que utiliza 3 operando, onde:
/*
    Operador:   <operando_sobre_condicional> ? <resultado_se_verdadeiro> : <resultado_se_falso>;
*/

//UTILIZAÇÃO DO OPERADOR TERNÁRIO:
//Função que utiliza operador ternário para dizer se um aluno está aprovado ou reprovado de acordo com a sua nota:
function resultado(nota) {
    valor = nota;
    nota = nota >= 7 ? 'Aprovado' : 'Reprovado'; //O ternário aqui avalia se a nota é igual ou maior que 7...
    return console.log(`1) Neste Semestre o aluno(a) tirou a nota de ${valor}, portanto ele(a) está: ${nota}`);
}
resultado(5);
resultado(7);
resultado(6);
resultado(8);



//USANDO OPERADOR TERNÁRIO EM FUNÇÃO ARROW:
//Veja como fica muito mais simples uma função utilizando operador ternário com função arrow...
let resultado2 = nota => console.log(`2) A nota do aluno(a) é ${nota}, ele(a) está:`, nota >= 7 ? 'Aprovado' : 'Reprovado');
resultado2(5);
resultado2(7);
resultado2(6);
resultado2(8);
//Template String:
//É uma forma específica de escrevermos as nossas strings concatenando com outras strings, com variáveis e até mesmo operações dentro de uma string. Os templates tem a característica de trazerem uma estética melhor, podemos até mesmo quebrar linhas com template string, dar espaçamentos e quaisquer outras formatações normais de texto, que elas serão respeitadas durante a impressão do código. Para utilizá-la usamos a cráse, e para concatenar elementos usamos o "${}"...


//TEMPLATE STRINGS COM QUEBRAS DE LINHA E CONCATENAÇÃO:
const nome = 'Rebeca';
const template = `
    Olá
    ${nome}!
`;//Perceba durante a impressão que as quebras de linha e concatenações foram respeitadas.
console.log(template);


//CONCATENANDO OPERAÇÕES E EXPRESSÕES DENTRO DE TEMPLATES:
console.log(`1 + 1 =  ${1 + 1}`); //Perceba que operações podem ser usadas no template, porém, elas precisam estar dentro do "${}", se estiverem fora serão tratadas como expressões comuns...


//USANDO ARROW FUNCTION DENTRO DE TEMPLATES:
const up = texto => texto.toUpperCase(); //Uma função que transforma textos em letra maiúsculas...
console.log(`Ei... ${up('cuidado')}!`);
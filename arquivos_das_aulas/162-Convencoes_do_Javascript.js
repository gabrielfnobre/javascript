//CONVENÇÕES DO JAVASCRIPT:

//O javascript possuí alguns métodos de escrita de variáveis e funções que é o que chamamos de convenções, veja alguns destes métodos:

// Um detalhe muito importante, mas que às vezes não percebemos quando começamos a programar, é que cada linguagem possui seus próprios padrões. Eles servem não somente para a escrita de códigos que funcionem, mas também para criar nomes de variáveis, estruturar um programa e muito mais.

// A primeira coisa que precisamos ter em mente é que o JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas. Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como console.log) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas.

// Para ilustrar, o JavaScript trata os quatro exemplos abaixo como variáveis diferentes e não apresentará nenhum erro se você executar o programa:

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

// Podemos ver que, em um programa muito grande, a possibilidade de problemas é grande. Então como sabemos a forma certa de nomear? Aí entra o que chamamos de convenções, para padronizar estes aspectos do código.

// Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

/*
        
        *   camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. 
                Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.
        
        *   snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. 
              Por exemplo: minha_variavel ou senha_do_usuario.
        
        *   kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou 
               senha-do-usuario.
        
        *   PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: 
               MinhaVar ou SenhaDoCliente.
        
        *Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números
*/

// Quando falamos de convenção, estamos falando de boas práticas e padronização. Se você utilizar qualquer um dos padrões acima para nomear variáveis com JavaScript, seu código continuará funcionando, mas seguir as convenções é parte de desenvolver um código legível e bem escrito.

// Esse é um assunto vasto e com muitos detalhes, e é parte do nosso trabalho no cotidiano como pessoas que desenvolvem garantir que os chamados guias de estilo definidos para um produto de código sejam seguidos.
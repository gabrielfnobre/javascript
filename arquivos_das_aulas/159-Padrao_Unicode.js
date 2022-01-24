//O PADRÃO UNICODE:

//O padrão Unicode é um padrão formado partir de 2007, ele é mais conhecido como UTF (de Unicode Transformation Format ou “formato de conversão de unicode”, em tradução livre) é utilizado como padrão na web até hoje.

//O Unicode tem códigos específicos para “cifrar” e “decifrar” caracteres de mais de 150 idiomas antigos e modernos, e também diversos outros conjuntos de caracteres como símbolos matemáticos e inclusive emojs. A Wikipedia tem uma lista extensa de todas as tabelas com os códigos Unicode e os caracteres, como por exemplo os que estão abaixo:

console.log('\u0024') //dólar
console.log('\u0041') //Letra a em latin
console.log('\u2705') //Um checkbox marcado
console.log('\u2706') //Símbolo de Telefone
console.log('\u3041') //Caractere Japonês
console.log('\u3065') //Caractere Japonês
console.log('\u2708') //Símbolo de um avião

//O JavaScript usa, por padrão, o UTF-16. O número 16 está relacionado aos espaços em bits ocupados por cada caractere, 16 neste caso. 

//Bancos de dados podem aceitar outros tipos de codificação de caracteres, o que faz sentido se pensarmos que o UTF-16 utiliza uma quantidade relativamente grande de espaço em memória para salvar cada caractere. 16 bits parece pouco, mas algumas vezes os bancos precisam salvar quantidades enormes de dados! Porém, com as tecnologias de armazenamento e tráfego de dados que temos hoje, esta já não é uma preocupação tão grande, a não ser em casos muito específicos. Já não é muito comum utilizar uma codificação diferente da UTF em bancos mesmo em caso de grandes volumes de dados, mas sempre vai depender muito do caso.

//Para mais detalhes sobre como o padrão Unicode funciona, acesse o site oficial do Unicode: https://home.unicode.org/
//OBJECTS:
//Objetos em Javascript são elementos que possuem um conjunto de chave e valor, onde as chaves servem como um identificador para um atributo daquele objeto, enquanto os valores são os atributos em si.
//OBSERVAÇÕES: No Javascript existem 2 tipos de object, para mais detalhes veja a aula 039;



//DECLARANDO OBJECT LITERALMENTE:
const prod1 = {}; //A declaração é feita á partir de um par de chaves...
console.log('1) ',typeof prod1);



//ATRIBUINDO CHAVE E VALOR DINÂMICAMENTE:
prod1.nome = 'Celular Ultra Mega Power'; //perceba que criamos uma chave "nome" e atribuímos um valor para ela...
prod1.preco = 4998.90;
console.log('\n2) ',prod1); //Veja na impressão que temos conjuntos de par chave valor...



//ATRIBUINDO CHAVES COM ESPAÇO ENTRE AS PALAVRAS:
prod1['Desconto legal'] = 0.40; //Perceba que, para colocar palavras com espaçamento como chave, tivemos que colocar uma string dentro de colchetes.
console.log('\n3) ', prod1);



//DECLARANDO OBJECT E ATRIBUINDO CHAVE A VALOR LITERALMENTE:
const prod2 = { //Perceba que abrimos a chave de dentro colocamos várias chaves e valores separados por vírgula
    nome: 'Camisa Polo', //Perceba que colocamos : para fazer atribuição
    preco: 79.90,
    estilo: { //Podemos ter objetos dentro de objetos, desde que eles estejam resguardados por chaves...
        cor: 'Vermelha',
        tamanhos: { //Podemos ter objetos dentro de objetos, seguindo o mesmo estilo de chave e valor...
            grande: 'G', 
            media: 'M', 
            pequeno: 'P'
        }
    }
}
    console.log('\n4) ',prod2);



//RESGATANDO VALORES DE UM OBJECT:
console.log('\nNome do produto 1: ', prod1.nome); //Para resgatar o valor chamamos pela chave...
console.log('Preço do produto 1: ', prod1.preco);
console.log('Desconto do produto 1: ', prod1["Desconto legal"]); //Se a chave tem nome composto usamos os colchetes...
console.log('\nNome do produto 2: ', prod2.nome);
console.log('Preço do produto 2: ', prod2.preco);
console.log('Cor do produto 2: ', prod2.estilo.cor); //Se a chave possuí uma subchave usamos a notação ponto mais uma vez...
console.log('Tamanhos do produto 2: ', prod2.estilo.tamanhos); //Chamando todos os valores de uma sub-chave...
//NOTAÇÃO PONTO:
//A notação ponto no Javascript é uma forma que usamos para acessar elementos que estejam armazenados dentro de outro elemento, ou valores que estejam atribuídos dentro de um elemento. Podemos usar também a notação ponto para atribuir chaves a um objeto por exemplo. Veja alguns exemplos da utilização de notação ponto:

//ACESSANDO FUNÇÕES INTERNAS DE FUNÇÕES CONSTRUTORAS:
//No exemplo abaixo estamos usando a notação ponto para acessar duas funções internas (podemos chamar de métodos) das funções construtoras (Classes) "console" e "Math", além dessas funções internas temos muitas outras que poderíamos acessar usando notação ponto...
console.log('1)',Math.ceil(6.2));



//ATRIBUINDO UMA CHAVE A UM OBJETO POR ATRAVÉS DA NOTAÇÃO PONTO:
const obj1 = {};
obj1.nome = 'Bola'; //Perceba que usamos a notação ponto dessa vez não para acessar um valor, mas para criar uma chave dentro de um objeto...
console.log('2)', obj1);



//USANDO NOTAÇÃO PONTO PARA ACESSAR UM VALOR DE UM OBJETO:
console.log('3)', obj1.nome);



//USANDO NOTAÇÃO PONTO PARA CRIAR UM ATRIBUTO PÚBLICO DENTRO DE UMA CLASSE:
function Obj(nome) {
    this.nome = nome; //Perceba que usamos a notação ponto para usar a palavra reservada "this" para referenciar o objeto criado no momento...
}
const obj2 = new Obj('Cadeira'); //Criamos um objeto específico 'Cadeira' atribuíndo-o sobre a constante "obj2";
console.log('4)', obj2.nome); //Perceba que usamos notação ponto novamente para chamar o valor da variável...



//USANDO NOTAÇÃO PONTO PARA CHAMAR UM MÉTODO DENTRO DE UMA CLASSE:
function Obj2(nome) {
    this.nome = nome;
    this.gritar = function() { //Perceba que temos uma função que retorna um nome gritando, usamos notação ponto para colocá-la dentro de uma variável...
        console.log('5) ' + nome.toUpperCase() + '!!!!'); //Usamos notação ponto para transformar todos os caracteres em maíusculo...
    }
}
const obj3 = new Obj2('Gabriel'); //Aqui instanciamos um objeto para a função...
obj3.gritar(); //Usamos notação ponto por através do objeto para chamar a função "gritar()"...
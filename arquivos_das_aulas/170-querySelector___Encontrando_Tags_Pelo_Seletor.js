//querySelector
/*
    A função querySelector() é uma função interna do escopo "document", ela é usada para que possamos encontrar um elemento html por através de algum seletor, seja ele qualquer seletor: id, class.

    Ela só pode ser usada dentro do escopo de document, o que faz todo o sentido, pois as tags também ficam dentro deste escopo.

    Veja o exemplo abaixo, onde ao clicarmos no botão ele ficará vermelho
*/

//EXEMPLO COM ID:
let ficaVermelho = () => document.querySelector('#alertar').style.backgroundColor = "red"

//EXEMPLO COM CLASS:
let ficaVerde = () => document.querySelector('.class_alertar').style.backgroundColor = "green"

//EXEMPLO COM SELETOR CSS:
let ficaAzul = () => document.querySelector('button:nth-child(3)').style.backgroundColor = "blue"
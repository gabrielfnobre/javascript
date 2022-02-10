//Eventos
/*
    Não é nenhum segredo que sempre é melhor utilizarmos qualquer tipo de formatação, seja formatação de estilo ou de comportamento por através do JS sempre por através de um arquivo externo e nunca diretamente nas tags do arquivo HTML.

    Isso também vale para os eventos. 
    Mas como referenciar eventos á partir de um arquivo externo diretamente para a tag desejada?

    Podemos fazer isso identificando o "id", "class" ou "tag" e depois usando o elemento diretamente no Javascript, vejamos como fazer isso...
*/

//APLICANDO EVENTOS AS TAGS POR ATRAVÉS DO JAVASCRIPT:
let avermelhar = () => {
    document.querySelector('body').style.backgroundColor = "red";
    document.querySelector('body').style.color = "white";
}

let embranquecer = () => {
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('body').style.color = "black";
}

//Perceba que é aqui que a mágica acontece, usando a notação "." conseguimos acessar a tag que contém determinado "id" e colocar qualquer evento sobre ela chamando uma função não disparada, se quisessemos que a função disparasse automaticamente teríamos usado os "()"...
document.querySelector('#vermelho').onclick = avermelhar;
document.querySelector('#branco').onclick = embranquecer;
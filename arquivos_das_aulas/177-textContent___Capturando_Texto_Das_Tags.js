//textContent
/* 
    O "textContent" é uma função do Node que retorna quaisquer textos escritos dentro de uma determinada tag ou de suas tags filhas.

    Podemos usar esse elemento também para modificar um texto que exista dentro de uma tag por através de atribuição.

    OBS: ela retorna somente o texto, não retornará as tags filhas que possívelmente existirem dentro de uma tag. Para trabalhar com as tags usamos o innerText.

    Podemos ver isso no exemplo abaixo...
*/

//USANDO TEXTCONTENT PARA LER TODOS OS TEXTOS DA SECTION E SUAS FILHAS...
console.log(document.querySelector('#mayor').textContent)


//USANDO TEXTCONTENT PARA MODIFICAR O TEXTO DO PARÁGRAFO 3...
document.querySelector('#mayor p:nth-child(3)').textContent = 'Eu mudei filho!'
//innerText
/* 
    O "innerText" é uma função do Node que retorna quaisquer textos renderizados - ou seja, como estão de fato no HTML - que estiverem dentro de um elemento HTML.

    Podemos usar esse elemento também para modificar o conteúdo de um elemento HTML por através de atribuição.

    OBS: note que ele é diferente do textContent, não retorna apenas o texto das tags, ele retorna até mesmo as tags.

    Podemos ver isso no exemplo abaixo...
*/

//USANDO INNERTEXT PARA LER TODO O CONTEÚDO DENTRO DE UMA SECTION...
console.log(document.querySelector('#mayor').innerHTML)


//USANDO INNERTEXT PARA MODIFICAR O CONTEÚDO DA SECTION COMPLETAMENTE...
document.querySelector('#mayor').innerHTML = `
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi adipisci molestiae beatae nisi atque unde, sed in quis sint debitis aut placeat est quidem! At officiis tempora fugiat tenetur!
</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi adipisci molestiae beatae nisi atque unde, sed in quis sint debitis aut placeat est quidem! At officiis tempora fugiat tenetur!
</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi adipisci molestiae beatae nisi atque unde, sed in quis sint debitis aut placeat est quidem! At officiis tempora fugiat tenetur!
</p>
`
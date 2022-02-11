//remove
/* 
    A função remove() é uma função do escopo Element que pode ser usada para remover todo um elemento de um documento HTML, e não apenas isso, pela pode até remover classes e ids se for usada dentro do escopo de classes de ids.

    Podemos ver isso no exemplo abaixo...
*/

document.querySelector('div').classList.remove('quadrado')

console.log(document.querySelector('div').classList)
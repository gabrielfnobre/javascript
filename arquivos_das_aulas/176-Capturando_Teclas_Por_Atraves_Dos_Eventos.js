//CAPTURANDO INFORMAÇÕES DOS USUÁRIOS POR ATRAVÉS DOS EVENTOS
/* 
    É possível capturar informações dos nossos usuários por através dos eventos. 
    
    Por exemplo, que teclas foram digitadas pelo nosso usuário enquanto ele estava na nossa página? Será que é possível capturar uma tecla em especial digitada pelo nosso usuário e adicionar algum tipo de comportamento? A resposta é sim.

    Podemos ver isso no exemplo abaixo...
*/
let mostraNoConsole = evento => console.log(evento.code)

document.querySelector('#botao').onkeyup = mostraNoConsole
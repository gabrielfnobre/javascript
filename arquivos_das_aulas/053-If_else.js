//IF.. ELSE:
//A estrutura if.. else.. confere se uma condição foi satisfeita, caso a condição seja satisfeita ela executa o laço do if, caso não, ela entra no laço else e efetua o que estiver em else...

//USANDO IF.. ELSE.. PARA TRAZER UM RESULTADO OU OUTRO...
const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('A nota do aluno é', nota, 'portanto ele está Aprovado!');
    } else {
        console.log('A nota do aluno é', nota, 'portanto ele está Reprovado!');
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('oito'); //Cuidado ao usar tipos diferentes do esperado, o Javascript é fracamente tipado e não vai impedir, mas ele pode trazer um resultado inesperado...
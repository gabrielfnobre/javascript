//CHARAT():
//O método "charAt()" é um metodo da função String onde conseguimos capturar um dado caractere dentro da string que corresponde ao seu valor indice. Lembrando que, assim como nos arrays, os índices nas strings iniciam á partir do índice "0"...
//Veja alguns exemplos abaixo...

//CAPTURANDO UM CARACTERE NUM ÍNDICE ESPECÍFICO:
let nome = 'Gabriel'
console.log('1)', nome.charAt(5))



//USANDO CHARAT() PARA SABER QUANTAS VEZES UM CARACTERE OCORRE EM UMA STRING:
let nome2 = 'Ana'
const quantidadeDeLetras = (letra, string) => {
    let contador = 0

    for(let i = 0; i < string.length; i++){
        if (string.charAt(i) === letra){
            contador += 1
        }
    }
    return console.log('\n2)', contador)
}

quantidadeDeLetras('a', nome2) //Perceba que apesar de Ana ter 2 letras "a", é capturada só uma, por que a outra letra "a" é maiúscula, fazendo com que ela não seja estritamente igual a letra "a" minúscula.
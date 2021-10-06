//FOR:
//A estrutura de repetição "for" é usada para quando temos uma estrutura de repetição na qual já sabemos quantas vezes queremos iterar...

//USANDO FOR E WHILE PARA FAZER UM CONTADOR DE 0 Á 10:
let contador = 0;
while (contador != 10){
    for(var i = 0; i <= 10; i++){ //Perceba que o for será repetido enquanto o valor de i não chegar a 11...
    contador = i;
    console.log(contador);
    }
}



//USANDO FOR PARA PERCORRER OS VALORES DE UM ARRAY:
console.log('\n');
const array = ['A', 'B', 'C', 'D'];
for (let i = 0; i < array.length; i++) { //Perceba como usamos o for para capturar todos os valores dentro do array...
    console.log(array[i]);
}
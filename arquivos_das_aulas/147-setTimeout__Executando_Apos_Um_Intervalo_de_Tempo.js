//SETTIMEOUT:

//O método setTimeout() é um método interno do Javascript onde executamos uma função somente depois de esgotar uma quantidade de tempo passada para o método, essa quantidade de tempo tem que ser passada em milissegundos.
//A grande diferença entre os métodos setTimeout() e setInterval() é que setInterval() fica executando a mesma função callback repetidas vezes dentro de um determinado espaço de tempo, enquanto setTimeout() executa a função somente uma vez depois de um determinado intervalo de tempo.

//OBS: setTimeout() só aceita uma função callback passada como parâmetro para ela...

//USANDO SETTIMEOUT PARA ATRASAR A EXECUÇÃO DE UMA FUNÇÃO...
const segundos1 = new Date().getSeconds() //Aqui estamos usando o getSeconds para capturar o segundo atual...
console.log(segundos1)

setTimeout(() => {
    const segundos2 = new Date().getSeconds() //E aqui estamos usando o getSeconds dentro de um setTimeout para capturar o segundo seguinte atrasando a execução da função em 1 segundo.
    console.log(segundos2)
}, 1000)

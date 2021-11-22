//GETSECONDS():

//O método getSeconds() é um método de Date que usamos para capturar os segundos da data atual...

//CAPTURANDO SEGUNDOS DA DATA ATUAL...
const segundos1 = new Date().getSeconds() //Aqui estamos usando o getSeconds para capturar o segundo atual...
console.log(segundos1)

setTimeout(() => {
    const segundos2 = new Date().getSeconds() //E aqui estamos usando o getSeconds dentro de um setTimeout para capturar o segundo seguinte atrasando a execução da função em 1 segundo.
    console.log(segundos2)
}, 1000)

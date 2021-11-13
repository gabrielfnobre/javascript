//AXIOS:

//A biblioteca "axios" é uma biblioteca que imita um cliente http, usamos ela para fazer requisições em servidores http por através de URL's.
//Primeiro precisamos de baixar a biblioteca axios, ela é uma biblioteca externa:

//USANDO AXIOS PARA CAPTURAR UMA LISTA DE FUNCIONARIOS EM UMA URL:
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' //Aqui temos o endereço que desejamos pegar a lista de funcionário...
const axios = require('axios') //Importamos a biblioteca axios...

axios.get(url).then(response => { //Usamos método get() para pegar a url e uma função por através do método then() para capturar os dados dos funcionários...
    const funcionarios = response.data
    console.log(funcionarios)
    }
)
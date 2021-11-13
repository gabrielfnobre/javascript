//EXERCICIO: PEGAR A MULHER CHINESA COM O MENOR SALÁRIO:

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const chineses = valor => valor.pais == 'China'
    const mulheres = valor => valor.genero == 'F'
    const salario = valor => valor.salario
    const menorSalarioDeMulherChinesa = funcionarios.filter(chineses).filter(mulheres).map(salario).reduce((acu, cur) => Math.min(acu, cur))
    const mulherComMenorSalario = funcionarios.filter(chineses).filter(mulheres).filter(valor => valor.salario == menorSalarioDeMulherChinesa)
    console.log(mulherComMenorSalario)
    }
)


//setInterval():
//Essa é uma função built-in do Javascript que serve para executarmos uma função dentro de um determinado intervalo de tempo contabilizado em milisegundos.
//ATENCÃO!!! A função setInterval() só recebe funções, ela não executa um script qualquer, só funções.

//Como fazer:
//Dentro do campo de parâmetros da função setInterval() colocamos a função que desejamos executar e depois, "separado pela vírgula", colocamos o tempo em milissegundos em que desejamos que esse script seja executado.
//Exemplo:

//EXECUTANDO UMA FUNÇÃO DE 1 EM 1 SEGUNDO:
setInterval( function () { //Perceba que setInterval só aceita funções...
     console.log("Oi, fala comigo...");
}, 1000);



//PODEMOS TAMBÉM UTILIZAR ARROW FUNCTIONS:
setInterval ( digaOi => console.log('Oi'), 1000); //Perceba que uma simples arrow function pode ser colocada dentro de um setInterval()...



//USANDO BIND PARA AMARRAR O THIS DE UMA FUNÇÃO EXECUTADA DENTRO DO SETINTERVAL:
//setInterval também é uma função, por isso, devemos ter cuidado quando executamos um elemento que pertence a outra função com o uso do this 
function idadeDaPessoa() { //Perceba que temos aqui uma função construtora que possuí um atributo chamado "idade" de valor "0"...
    this.idade = 0;
}

//Agora, fora do contexto da função construtora, chamamos um setInterval globalmente...
setInterval(function() { //Dentro do setInterval criamos uma função anônima...
    this.idade++; //A função tem o papel de chamar um atributo idade referenciando ao objeto que lhe chamou e incrementar 1 ao valor desse objeto, porém, quem está chamando o objeto é contexto global que não possuí nenhum atributo "idade"
    console.log(this.idade); //Também queremos que os valores incrementados sejam impressos a cada espaçamento de tempo do setInterval...
}.bind(idadeDaPessoa()), 1000) //Como queremos que o setInterval chame o atributo idade á partir do escopo da função contrutora "idadeDaPessoa", nós utilizamos um bind que chama essa função (como ela é uma função construtora poderíamos chamá-la também simplesmente instanciando a função, assim "new idadeDaPessoa")
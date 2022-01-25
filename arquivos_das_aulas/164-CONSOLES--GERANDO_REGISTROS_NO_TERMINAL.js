//CONSOLE:

//O console é uma ferramenta do javascript para expôr mensagens no terminal do Node ou nos navegadores, ele pode ser utilizado para vários fins, por exemplo:
/*
        - Para expôr erros nas linhas de comando;
        - Para mostrar mensagens quando um determinado trecho é executado;
        - Para mostrar dados que estão sendo executados no programa;
        - Para quaisquer fins onde é necessário retornar uma mensagem ao usuário que lhe revele aspectos da execução do 
            programa;
*/

//Para tanto o console irá utilizar um determinada função para cada tipo e dados que ele deseja expôr, por exemplo:
/*
        - log():
            A função log() é utilizada sempre que desejamos mostrar um registro na tela do terminal. A forma de utilização do
            "log()" é console.log('registro');

        - error():
            A função "error()" é utilizado somente para mostrar erros que aconteceram na execução do código fonte. Geralmente os consoles que utilizam "error()" deverão ser usados dentro alguma função de tratamento de erro, como "try" e "catch", e os dados passados dentro de "error()" deverão ser instanciados sobre a classe "Error" do javascript. A forma de utilização é idêntica a forma em que utilizamos o "console.log()", com a excessão de que os dados dentro de "error()" deverão ser instanciados da seguinte forma "new Error('dados')";

        - table(): 
            A função "table()" é usada para visualizar de forma mais organizada informações tabulares;

        - time() e timeEnd(): 
            A função "time()" e "timeEnd()" são usadas para temporizar período que uma operação de código leva para ser iniciada e concluída;

        - trace(): 
            A função "trace()" é usada para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução;

        Além destes, existem muitos outros...
*/

//É sempre uma boa prática colocarmos um console.log() durante as execuções de um determinado trecho de código que faz alguma função dentro do nosso código. Essas registros podem nos ajudar a identificar problemas que aparecem e o andamento de execução do nosso código.

//Para mais informações sobre como usar o console, veja a especificação do Node no site: https://nodejs.org/api/console.html

//Vejamos alguns exemplos da sua utilização:


//CONSOLE.LOG:
console.log('Qualquer mensagem de registro')



//CONSOLE.ERROR:
console.error(new Error('Deu ruim!')) //Perceba que o erro foi instanciado, e quando fazemos isso o Javascript traz todo o stacktrace do erro....
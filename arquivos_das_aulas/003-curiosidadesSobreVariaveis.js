//CRIAÇÃO:
//A criação envolve usar o prefixo "var" ou "let", um nome identificador e podemos iniciá-la com valores ou não:
variable1 = 3; //Podemos criar sem colocar var ou let, automáticamente ela virará um var.
var variable2; //Podemos usar var (Haverá mudança no escopo de variável)
let variable3 = 2; //Podemos usar let (Haverá mudança no escopo de variável)

console.log(variable1, variable2, variable3);

// OBS: via de regra evite usar var, use mais o let, pois as variáveis criadas com let não podem ser redeclaradas.
//SORT():
//O método "sort()" é um método interno do Array onde podemos ordenar um array.
//Se o nosso array for numérico, ele ficará em ordem crescente e se ele for alfabético, ele ficará em ordem alfabética, ele se ele for alfanumérico, ele ficará em ordem alfanumérica (começando com os números e depois partindo para as letras).
//Vejamos alguns exemplos:

//ORDENANDO NÚMEROS:
const arrayNum = [4, 6, 1, 8, 49, 48, 2, 5]
arrayNum.sort()
console.log('1)', arrayNum) //Mas perceba que o sort() ordena o array somente em relação ao primeiro algarismo numérico...



//ORDENANDO STRINGS:
const arrayStrings = ['Rafael', 'Gonçalvez', 'Ana', 'Paulo', 'Gustavo']
arrayStrings.sort()
console.log('\n2)', arrayStrings) //Perceba que as strings são ordenadas tranquilamente...



//ORDENANDO ARRAYS ALFANUMÉRICOS:
const arrayAlfa = [3, 'Rafael', 6, 'Gonçalvez', 10, 'Ana', 55, 'Paulo', 30, 'Gustavo']
arrayAlfa.sort()
console.log('\n3)', arrayAlfa) //Perceba que primeiro os números foram ordenados, e depois as strings...

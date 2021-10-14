let fatorial = num => {
    
    let guardaNum = num;

    for(let i = (num - 1); i > 0; i--){
        guardaNum *= i;
    }

    return console.log(`O fatorial de ${num} é ${guardaNum}.`)
}

fatorial(10)
fatorial(5)
fatorial(9)
fatorial(450)
fatorial(2)
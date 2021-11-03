const media = array => {
    let total = 0
    let divisor = 0
    for(let i = 0; i < array.length; i++){
        total += array[i]
        divisor++
    }
    return console.log(total / divisor)
}

media([0, 10])
media([1, 2, 3, 4, 5])
const transformaNumberString = (value) => `R$ ${value.toFixed(2)}`;

console.log(transformaNumberString(0.1 + 0.2))
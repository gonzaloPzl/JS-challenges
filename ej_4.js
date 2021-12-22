// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

const wholeNumber = number => Number.isInteger(number)

console.log(wholeNumber(2.5))

// other way
// Se sigue el concepto que cualquier numero entero dividido por 1 nos va a dar de resto 0
// En cambio los numeros decimales no
const wholeNumber2 = number => number % 1 == 0 ? true : false

console.log(wholeNumber2(10))
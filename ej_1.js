// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as argument
// It should return true if the dates are equal
// It should return false otherwise

const isEqual = (date1,date2) => date1.getTime() === date2.getTime() ? true : false
// getTime genera un numero unico a partir de multiplicar el año, dia, mes, segundos y milesimas. 
// De esta forma podemos comparar si estos numeros generados son iguales

console.log(isEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
console.log(isEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
console.log(isEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
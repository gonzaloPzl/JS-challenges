// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const isEqualDay = (date1,date2) => date1.getDate() == date2.getDate() ? true : false

console.log(isEqualDay(new Date('2000/01/01'), new Date('2000/01/01')))
console.log(isEqualDay(new Date('2000/01/01'), new Date('2000/01/02')))
console.log(isEqualDay(new Date('2001/01/01'), new Date('2000/01/01')))
console.log(isEqualDay(new Date('2000/11/01'), new Date('2000/01/01')))

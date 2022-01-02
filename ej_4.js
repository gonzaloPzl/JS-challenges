// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

// const isMinDiff = (date1,date2) => {
//   let diff = (date1.getTime() - date2.getTime()) / (1000*60) 
//   diff = diff < 0 ? diff * -1 : diff 
//   return diff <= 60 ? true : false
// }
const isMinDiff = (date1,date2) => {
  let diff = (date1.getTime() - date2.getTime()) / (1000*60)
  diff = diff < 0 ? diff * -1 : diff 
  return diff <= 60 ? true : false
}

console.log(isMinDiff(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
console.log(isMinDiff(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')))
console.log(isMinDiff(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')))
console.log(isMinDiff(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')))

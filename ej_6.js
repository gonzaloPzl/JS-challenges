// Write a function that takes as argument an object with the properties date and daysToAdd, containing a Javascript date and a number
// It should add daysToAdd days to the date and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

const addDaysToDate = obj => {
  const suma = obj.date.getTime() + (obj.daysToAdd * 1000 * 60 * 60 * 24) // obtenemos el valor de date en milisegundos
  // luego le sumamos los dias pasados en milisegundos también
  return suma
}

console.log(addDaysToDate({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 31 }))
console.log(addDaysToDate({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 10 }))
console.log(addDaysToDate({ date: new Date(Date.UTC(2000,02,28,)), daysToAdd: 2 }))

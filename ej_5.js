// Write a function that takes as argument an object with the properties a and b, each containing a date instance
// It should return true if date a is earlier than date b
// It should return false otherwise

const earlieThan = obj => {
  const fechas = Object.values(obj) // pasa los valores a un array
  return fechas[0].getTime() < fechas[1].getTime() ? true : false // determinamos cual esta mas cerca
}

console.log(earlieThan({a: new Date('2000/01/01 08:00:00'), b: new Date('2000/01/01 08:45:00')}))
console.log(earlieThan({a: new Date('2000/01/01 08:45:00'), b: new Date('2000/01/01 08:00:00')}))
console.log(earlieThan({a: new Date('2000/01/01 08:00:00'), b: new Date('2000/01/01 08:00:00')}))

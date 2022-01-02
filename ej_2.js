// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const getBetweenDays = (date1, date2) => {
  const diff = (date1.getTime() - date2.getTime()) / (1000*60*60*24) // Con getTime pasamos las fechas a milisegundos
  // Hacemos la resta y luego dividimos por la multiplicación de mil*seg*min*hr
  return diff < 0 ? diff * -1 : diff // En el caso de que la diferencia sea negativa se multiplica por -1 para hacerla positiva
}

console.log(getBetweenDays(new Date('2020-06-11'), new Date('2020-06-01')))
console.log(getBetweenDays(new Date('2000-01-01'), new Date('2020-06-01')))

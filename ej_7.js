// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

const dateDiff = (date1, date2) => {
  let diff = date1.getTime() - date2.getTime() // obtenemos la diferencia
  diff = diff < 0 ? diff * -1 : diff // pasamos la diferencia a postiivo si se requiere
  diff = diff / (1000) // pasamos el numero a segundos
  let hrs = 0, min = 0, sec = 0 

  while (diff > 0) { // Mientras la diferencia sea mayor a 0 se ejecuta el bucle
    sec += 1 // se suma 1 a los segundos
    diff -= 1 // se resta 1 a la diferencia
    if (sec >= 60) { // si los segundos llegan a 60
      min += 1 // se aumenta un minuto
      sec = 0 // se vuelven los segundos a 0
    }
    if (min >= 60) { // Si los minutos llegan a 60 
      hrs += 1 //se aumenta una hora
      min = 0 // se vuelven los minutos a 0
    }
  }
  
  return {"hrs": hrs, "min":min, "sec": sec}
}

console.log(dateDiff(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')))
console.log(dateDiff(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')))
console.log(dateDiff(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')))
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageNumbers = arrayNumbers => {
  sum = 0
  for (i in arrayNumbers) { // Hacemos un for para iterar los numeros
    sum += arrayNumbers[i] // Sumamos todos los numeros dentro del array
  } 
  average = (sum / arrayNumbers.length).toFixed(2) // dividimos esa suma por la cantidad de elementos, el toFixed limita los decimales
  return average
}

console.log(averageNumbers([3,33,100]))

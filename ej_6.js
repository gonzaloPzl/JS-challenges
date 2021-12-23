// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays


function mergeArrays () { // para utilizar arguments no podemos usar arrow function, así que vamos a tener que utilizar la forma tradicional de funciones
  array = []
  for (let i = 0; i < arguments.length; i++) { // arguments tiene información sobre los argumentos que le pasamos, por lo que podemos iterar por ellos
    array.push(arguments[i]) // agregamos cada parametro al array mediante un push
  }
  return array
}

console.log(mergeArrays([21, 15, 33],[233, 15],[15],[330, 25, 22]))

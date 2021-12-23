// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const equalElements = array => {
  for (let i of array) { // hacemos un for de cada elemento 
    if (array[i] != array[i + 1] ) { // la i toma el valor de elemento y lo compara con el siguiente en la lista
      return false // si la comparación es diferente se retorna un false
    }
  }
  return true // en caso de que todas las comparaciones sean iguales se devuelve un true
}
console.log(equalElements([1,1,1]))
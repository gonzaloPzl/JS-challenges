// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeArrays = (array1, array2) => {
  const arrayConcat = array1.concat(array2) // Unimos los 2 arrays en uno nuevo
  const array = []
  for (let i in arrayConcat) { // iteramos por cada index del array
    if (!(array.includes(arrayConcat[i]))) { // si el elemento de ArrayConcat no esta presente en el array se añade
      array.push(arrayConcat[i]) // se hace el push del que no esta incluido en el array
    }
  }
  return array  
}

console.log(mergeArrays([10,15,30],[15,25,25]))

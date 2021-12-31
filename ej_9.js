// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

const addContinent = (array, cont) => {
  for (objeto of array) {
    Object.defineProperty(objeto,"continent", {value: cont, enumerable: true})
  }
  return array
}

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'))
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'))

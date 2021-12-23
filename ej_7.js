// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

const deleteElement = (array, value) => {
  for (let i in array) {
    if (array[i] === value) {
      array.splice(i, 1)
    }
  }
  return array
}

console.log(deleteElement([15,10,25,15,5], 15))
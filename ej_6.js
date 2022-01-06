// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set

const addToSet = (set, array) => {
  for (let i = 0; i < array.length; i++) {
    if (!(set.has(array[i]))) {
      set.add(array[i])
    }
  }
  return set
}

console.log(addToSet(new Set([1, 2, 3]), [4, 5, 6])) // 🌟 Expected: new Set([1, 2, 3, 4, 5, 6 ])
console.log(addToSet(new Set('12345'), [...'6789'])) // 🌟 Expected: new Set([...'123456789'])
console.log(addToSet(new Set([1, 2, 3]), [2, 3])) // 🌟 Expected: new Set([1, 2, 3])
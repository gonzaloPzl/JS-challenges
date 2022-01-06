// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

const removeFromSet = (set, item) => {
  set.delete(item)
  return set
}

console.log(removeFromSet(new Set([1, 2, 3]), 1)) // 🌟 Expected: new Set([2, 3])
console.log(removeFromSet(new Set('12345'), '3')) // 🌟 Expected: new Set(['1', '2', '4', '5'])
console.log(removeFromSet(new Set([1, 2, 3]), 4)) // 🌟 Expected: new Set([1, 2, 3])
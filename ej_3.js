// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

const concatSets = (set1,set2) => {
  return new Set([...set1, ...set2])
}

console.log(concatSets(new Set('123'), new Set('234'))) // 👉 Expected: new Set('1234')
console.log(concatSets(new Set([1, 2, 3]), new Set([3, 4, 5]))) // 👉 Expected: new Set([1, 2, 3, 4, 5])
console.log(concatSets(new Set([false, false, NaN]), new Set([true, true, NaN]))) // 👉 Expected: new Set([false, NaN, true])
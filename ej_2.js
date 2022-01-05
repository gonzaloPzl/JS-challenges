// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

const setToArray = set => Array.from(set)

console.log(setToArray(new Set([1, 2, 3]))) // Expected: [1, 2, 3]
console.log(setToArray(new Set([123]))) // Expected: [123]
console.log(setToArray(new Set(['1', '2', '3']))) // Expected: ['1', '2', '3']
console.log(setToArray(new Set('123'))) // Expected: ['1', '2', '3']

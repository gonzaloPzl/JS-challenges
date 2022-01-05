// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

const isInclude = (set1,item) => set1.has(item) ? true : false

console.log(isInclude(new Set([1, 2, 3]), 2)) // Expected: true
console.log(isInclude(new Set([123]), 2)) // Expected: false
console.log(isInclude(new Set(['1', '2', '3']), '2')) // Expected: true
console.log(isInclude(new Set('123'), '2')) // Expected: true

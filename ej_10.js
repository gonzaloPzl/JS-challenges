// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

const rangeArray = (min, max) => {
  const array = []
  for (let i = min; i < max + 1; i++) {
    array.push(i)
  }
  return array
} 

console.log(rangeArray(2,10))
console.log(rangeArray(1,3))
console.log(rangeArray(-5,5))
console.log(rangeArray(2,7))

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const newArray = (array, num) => {
  const array1 = array
  if (num >= 6) {
    array1.unshift(num)
  } else {
    array1.unshift(0)
  }
  return array1
}
console.log(newArray([1,2,3], 6)) // Expected:[6,1,2,3] 
console.log(newArray(['a','b'], 2)) // Expected:[0,'a','b']
console.log(newArray([null,false], 11)) // Expected:[11,null,false]

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const numbersSorted = arrayNumbers => {
  arrayNumbers.sort(function(a, b) {
    return b - a;
  })
  return arrayNumbers
}

console.log(numbersSorted([15,10,5,30,55]))

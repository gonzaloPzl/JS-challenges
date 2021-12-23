// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

const sumArray = (array, num) => {
  sum = 0 // inicializamos la variable suma
  for (let number of array) { // iteramos cada numero en el array
    if (number > num) { // si el numero es mayor al num lo sumamos
      sum = sum + number
    }
  }
  return sum
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7], 2))
console.log(sumArray([-10, -11, -3, 1, -4], -3))
console.log(sumArray([78, 99, 100, 101, 401], 99))

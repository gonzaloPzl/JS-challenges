// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const maths = function (num_a, num_b) {
  return num_a < num_b ? num_a / num_b : num_a * num_b
}

console.log(maths(50, 100))

// const maths = function (num_a, num_b) {
//   if (num_a < num_b) {
//     return num_a / num_b
//   } else {
//     return num_a * num_b
//   }
// }
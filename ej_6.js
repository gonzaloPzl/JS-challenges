// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// ternary operator form
const concatStrings = function (string_a, string_b) {
  return string_a.includes(string_b) ? string_b + string_a :string_a + string_b 
}

console.log(concatStrings('lips','s'))




// Normal form
// const concatStrings = function (string_a, string_b) {
//   if (string_a.includes(string_b)) {
//     return string_b + string_a
//   } else {
//     return string_a + string_b
//   }
// }
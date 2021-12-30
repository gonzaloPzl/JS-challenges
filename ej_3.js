// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

// const getProp = (obj,prop) => {
//   if (obj.hasOwnProperty(prop)) {
//     return obj[prop]
//   } else {
//     return "La propiedad no existe en el objeto"
//   }
// }

// If ternario
const getProp = (obj,prop) => obj.hasOwnProperty(prop) ? obj[prop] : "La propiedad no existe en el objeto"

console.log(getProp({  continent: 'Asia',  country: 'Japan'}, 'continent')) // Expected: 'Asia'
console.log(getProp({  country: 'Sweden',  continent: 'Europe'}, 'country')) // Expected: 'Sweden'

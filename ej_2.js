// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

const getProp2 = obj => obj['prop-2'] 

console.log(getProp2({  one: 1,  'prop-2': 2}))
console.log(getProp2({  'prop-2': 'two',  prop: 'test'}))
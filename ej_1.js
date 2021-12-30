// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

 
const getCountry = obj => {
  return obj.country
}

console.log(getCountry({  continent: 'Asia',  country: 'Japan'})) // Expected: 'Japan'
console.log(getCountry({  country: 'Sweden',  continent: 'Europe'})) // Expected: 'Sweden'


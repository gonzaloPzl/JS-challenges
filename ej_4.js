// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

const deleteProp = obj => {
  delete obj['country']
  return obj
}

console.log(deleteProp({ continent: 'Asia', country: 'Japan', region: 'Kansai' }))
console.log(deleteProp({ country: 'Sweden', continent: 'Europe', planet: 'Earth' }))
console.log(deleteProp({ city: 'Sacramento', state: 'California', country: 'USA', continent: 'North America' }))
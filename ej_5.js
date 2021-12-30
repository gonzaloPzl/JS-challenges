// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

const concatObj = (obj1,obj2) => {
  const cityObj2 = obj2.country // guardo el nombre de la ciudad
  delete obj2.country // elimino la propiedad country
  obj2.city = cityObj2 // añadimos la propiedad city con el valor correspondiente
  const obj = Object.assign(obj1,obj2) // concatenamos los 2 objetos
  return obj 
}

console.log(concatObj({ continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' }))
console.log(concatObj({ continent: 'North America', country: 'USA' }, { planet: 'Earth', country: 'Los Angeles', state: 'California' }))

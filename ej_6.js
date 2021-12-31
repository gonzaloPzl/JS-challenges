// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swap = obj => {
  let prop = Object.keys(obj) // creamos un array con las propiedades
  let valores = Object.values(obj) // creamos un array con los valores
  const obj2 = {} // creamos un nuevo objeto

  for (let i = 0; i < prop.length; i++) { // iteramos por el largo de las propiedades
    Object.defineProperty(obj2, valores[i], { // Agregamos la propiedad con defineProperty
      value: prop[i], // Al valor le asignamos la propiedad
      enumerable: true, // enumerable es para que sea visible
    })
  }
  
  return obj2
}

console.log(swap({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' }))
console.log(swap({ sheep: 'animal', ewe: 'female', ram: 'male', lamb: 'young' }))
console.log(swap({ Berlin: 'city', Germany: 'country' }))

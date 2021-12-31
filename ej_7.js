// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const replaceEmpty = obj => {
  const props = Object.keys(obj) // Creamos un array de propiedades

  for (let i = 0; i < props.length; i++) { // iteramos por la cantidad de propiedades
    if (obj[props[i]].trim() == '') { // si la propiedad es igual a un string vacio entra, se usa el trim para eliminar los espacios en blanco
      obj[props[i]] = null // Se le asigna null como valor a la propiedad
    }
  }
  return obj
}

console.log(replaceEmpty({ a: 'a', b: 'b', c: '' }))
console.log(replaceEmpty({ a: '', b: 'b', c: ' ', d: 'd' }))
console.log(replaceEmpty({ a: 'a', b: 'b ', c: ' ', d: '' }))
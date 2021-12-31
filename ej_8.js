// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const fixObjects = obj => {
  const props = Object.keys(obj) // Ponemos en un array las props

  for (let i = 0; i < props.length; i++) {
    if (props[i] == "size") { // Si la propiedad es size
      let size_prop = obj[props[i]] // guardamos el valor de size
      obj[props[i]] = `${size_prop}cm` // utilizamos el template string para generar el resultado
    } else if (props[i] == "weight") {
      let weight_prop = obj[props[i]]
      obj[props[i]] = `${weight_prop}kg`
    } else if (!(props[i] == "fn" || props[i] == "ln" || props[i] == "size" || props[i] == "weight")) { // si no es ninguno de las propiedades requeridas se elimina la propiedad
      delete obj[props[i]]
    }
  }

  return obj
}

console.log(fixObjects({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
console.log(fixObjects({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}))
console.log(fixObjects({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}))
console.log(fixObjects({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}))

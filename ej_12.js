// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const orderObject = (array) => {
  obj = {}; // declaramos el objeto

  for (let i in array) {  // Se hace un recorrido por el array
    if (array[i][0] in obj) { // Se consulta si se encuentra la primera letra como propiedad dentro del objeto
      obj[array[i][0]].push(array[i]); // En el caso de ser así se hace un push dentro del array que se crea cuando no se encuentra la propiedad
    } else if (!(array[i][0] in obj)) { // Se consulta si la letra no esta como propiedad
      obj[array[i][0]] = [array[i]]; // Se crea la letra como propiedad y se le asigna como primer elemento el perteneciente al array de parametro
    }
  }
  return obj;
};

console.log(orderObject(["Alf", "Alice", "Ben"]));
console.log(orderObject(["Ant", "Bear", "Bird"]));
console.log(orderObject(["Berlin", "Paris", "Prague"]));

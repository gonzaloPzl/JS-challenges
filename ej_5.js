// Write a function that takes an array of strings as argument
// It should return the longest string

const longestString = arrayStrings => {
  let longest = "" // Inicializo la variable con un string vacio
  for (word of arrayStrings) { // hacemos un for of para iterar por cada objeto 
    if (word.length > longest.length) { // Si la palabra es mas larga que la palabra mas larga anteriormente
      longest = word // se asigna esa palabra para que sea la nueva palabra mas larga
    }
  }
  return longest
}

console.log(longestString(["123","1234567","13456","12345"]))
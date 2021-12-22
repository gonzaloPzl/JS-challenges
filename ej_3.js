// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

const stringInString = (letter, sentence) => {
  let count = 0; // contador
  const sentenceToArray = Array.from(sentence) // transforma el la oracion en un array con una palabra por indice
  for (let i in sentenceToArray) { // se hace un for iterando cada letra
    if (sentenceToArray[i] == letter) { // si la letra en ese indice es igual a la que se pasa en el argumento se aumenta el contador en 1
      count += 1
    }
  }
  return count
};

console.log(stringInString('o','www.gonzalo.com'))

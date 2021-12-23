// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

// myFunction('java', 'tpi%rcs') Expected:'Javascript'
// myFunction('c%ountry', 'edis') Expected: 'Countryside'
// myFunction('down', 'nw%ot') Expected: 'Downtown'

const correctWord = (word1,word2) => {
  word = word1 + word2 // concatenamos
  word = word.charAt(0).toUpperCase() + word.slice(1); // charAt(0) devuelve una letra dependiendo el indice que le pasemos, en este caso la primera letra
  // slice nos devuelve la palabra a partir del indice que le indiquemos, ente caso a partir de la segunda palabra
  word = word.replace('%','')
  if (word.length == 10 || word.length == 8) {
    let firstPart = word.slice(0,4)
    if (word.length == 10) {
      for (let i=0; i < 3; i++) { // repetimos loop 3 veces
        letters = word.slice(-2) // tomo las ultimas 2 letras de la palabra
        letters = letters.split("") // las transformo en un array
        letters = letters.reverse() // invierto el orden el array
        letters = letters.join("") // transformo el array a string
        firstPart = firstPart + letters // añado esas 2 letras a la primera parte
        word = word.split('') // transformo la palabra en arreglo
        word.length = word.length -2 // elimino las ultimas 2 letras dentro del array
        word = word.join("") // vuelvo a transformar el array en string
      }
    } else if (word.length == 8) {
      for (let i=0; i < 2; i++) {
        letters = word.slice(-2)
        letters = letters.split("")
        letters = letters.reverse()
        letters = letters.join("")
        firstPart = firstPart + letters
        word = word.split('')
        word.length = word.length -2
        word = word.join("")
      }
    }
    return firstPart
  } else if (word.length == 11) {
      let firstPart = word.slice(0,7)
      for (let i=0; i < 2; i++) {
        letters = word.slice(-2)
        letters = letters.split("")
        letters = letters.reverse()
        letters = letters.join("")
        firstPart = firstPart + letters
        word = word.split('')
        word.length = word.length -2
        word = word.join("")
      }
    return firstPart
  }
}

console.log(correctWord('java','tpi%rcs'))
console.log(correctWord('c%ountry', 'edis'))
console.log(correctWord('down', 'nw%ot'))
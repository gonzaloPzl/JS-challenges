// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

const stringInString = function (letter, sentence) {
  let count = 0;
  const sentenceToArray = Array.from(sentence)
  for (let i in sentenceToArray) {
    if (sentenceToArray[i] == letter) {
      count += 1
    }
  }
  return count
};

console.log(stringInString('o','www.gonzalo.com'))

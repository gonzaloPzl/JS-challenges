// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array

const splitNumber = number => {
  stringNumber = number.toString() // transformo el numero a string
  arrayDigits = Array.from(stringNumber) // transformo el string en un array separado
  for (i in arrayDigits) { // itero por cada elemento del array
    arrayDigits[i] = Number(arrayDigits[i]) // transformo cada string de digito en digito numerico
  }
  return arrayDigits // retorno el arreglo
}

console.log(splitNumber(1532))
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const xAndY = (x,y) => {
  if (x % y == 0) { // evaluo si es divisible
    return x
  } else { // Si no lo es entra en el while
    while (!(x % y == 0)) { // Mientras no sea divisible se ejecuta 
      x += 1 // Se suma 1 a la x
    }
    return x
  }
}

console.log(xAndY(29,7))
console.log(xAndY(100,10))
console.log(xAndY(21,5))
// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

// const newSet = (item1,item2,item3) => {
//   const set = new Set()
//   set.add(item1,item2,item3)
//   set.add(item2)
//   return set
// }

function newSet() {
  const set = new Set() // Creamos el set
  for (let i=0; i < arguments.length; i++) { // hacemos un for con el tamaño de los parametros
    set.add(arguments[i]) // añadimos esos parametros al set
  }
  return set // ヾ(⌐■_■)ノ♪ devolvemos el set
}

console.log(newSet(1, 'b', 3)) // 🌟 Expected: new Set([1, 'b', 3])
console.log(newSet(NaN, null, false)) // 🌟 Expected: new Set([NaN, null, false])
console.log(newSet('a', ['b'], { c: 3 })) // 🌟 Expected: new Set(['a', ['b'], { c: 3 }])
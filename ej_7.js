// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB

const itersectionSets = (set1,set2) => {
  const set = new Set()
  for (let item of set1) {
    if (set2.has(item)) {
      set.add(item)
    }
  }
  return set
}

console.log(itersectionSets(new Set([1, 2, 3]), new Set([4, 5, 6]))) // 🌟 Expected: new Set()
console.log(itersectionSets(new Set ('12345'), new Set([...'45678']))) // 🌟 Expected: new Set('45')
console.log(itersectionSets(new Set([1, 2, 3]), new Set([2, 3, 4]))) // 🌟 Expected: new Set([2, 3])
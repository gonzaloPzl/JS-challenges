// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

const lastElements = (array, n) => {
  const arrayElements = [];
  if (array.length < n) {
    return array;
  } else {
    for (let i = 0; i < n; i++) {
      let item = array.pop();
      arrayElements.push(item);
    }
    return arrayElements.reverse();
  }
};

console.log(lastElements([1, 2, 3, 4, 5], 2));
console.log(lastElements([1, 2, 3], 6));
console.log(lastElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

const isPrime = (number) => { // Función para saber si es primo
  div_count = 0;
  for (let i = 1; i <= number; i++) { // Itera por cada numero hasta tener el valor igual al parametro
    if (number % i == 0) { // Si se cumple la condicion de dar resto 0 se suma 1 al div_count
      div_count += 1;
    }
  }
  return div_count <= 2 ? true : false; // Si el div count es igual o menor que 2 es primo
};

const primeNumber = (number) => {
  if (isPrime(number)) { // Se consulta con la anterior función si es primo
    return number;
  } else { // Si no lo es se entra en el while
    while (!isPrime(number)) { // Mientras no sea primo se va sumando 1 hasta que lo sea
      number += 1;
    }
    return number;
  }
};

console.log(primeNumber(24));

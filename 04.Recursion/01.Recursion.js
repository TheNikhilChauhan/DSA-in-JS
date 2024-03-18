// Factorial of a number

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  n = n * factorial(n - 1);
  return n;
}

console.log(factorial(5));

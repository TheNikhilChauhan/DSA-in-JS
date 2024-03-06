// Find nth Fibonacci number

//recursive approach is not feasable for larger inputs
// Ans 1:
let fibonacciSeries = (num) => {
  if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let newNum = fibonacciSeries(num - 2) + fibonacciSeries(num - 1);
    return newNum;
  }
};

console.log(fibonacciSeries(8));

// Ans2:

let FibonacciSeries = (num) => {
  if (num < 2) {
    return num;
  }
  let prev = 0,
    current = 1,
    next;
  for (let i = 2; i < num; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }
  return next;
};

console.log(FibonacciSeries(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

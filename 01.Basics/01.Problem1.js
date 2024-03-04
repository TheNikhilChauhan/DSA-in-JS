// sum of all natural numbers from 1 to n

function sumOfNaturalNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

const res = sumOfNaturalNum(5);
console.log(res);

// Count odd numbers in an interval range

// given two non-negative integers low and high. Return the cound of odd numbers between low and high

let countOdds = function (low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }

  return count;
};

console.log(countOdds(3, 7));

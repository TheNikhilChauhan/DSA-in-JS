// missing number in an array

//An aray contains n distinct numbers in the range [0,n] return the only number in the range that is missing from the array.

let missingNumber = (nums) =>
  (nums.length * (nums.length + 1)) / 2 - nums.reduce((acc, num) => acc + num);

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

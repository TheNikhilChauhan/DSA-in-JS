// reverse an array

const x = [1, 2, 4, 6, 3, 1, 7, -3];
const reverseArray = (arr) => {
  const reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr[i] = arr[arr.length - 1 - i];
    console.log(reversedArr[i]);
  }
  return reversedArr;
};

console.log(reverseArray(x));

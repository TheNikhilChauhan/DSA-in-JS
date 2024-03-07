//  Check if an element exists in an array?

const findElement = (arr, target) => {
  //   let x = arr.includes(target);
  //   return x;

  for (let e in arr) {
    if (e === target) {
      console.log(e);
      return true;
    }
  }
  return false;
};

console.log(findElement([1, 2, 3], 4));

const findElementIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`Index is: ${i}`);
      return true;
    }
  }
  return false;
};

console.log(findElementIndex([1, 2, 3, 4, 5], 5));

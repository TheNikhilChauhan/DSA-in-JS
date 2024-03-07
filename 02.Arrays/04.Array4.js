//  How to check if two arrays are equal or not?

const checkArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return `Arrays are not equal`;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `Arrays are not equal`;
    }
  }
  return `Both arrays are equal`;
};

// Another method
const checkArray = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((element, index) => arr1[index] === arr2[index])
  );
};

arr1 = [1, 2, 3, 4, 5, "Hey"];
arr2 = [1, 2, 3, 4, 5, "Hey"];
console.log(checkArray(arr1, arr2));

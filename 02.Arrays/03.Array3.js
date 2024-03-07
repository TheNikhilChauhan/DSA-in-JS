// how to delete, add or update element from specific index

const arr = [1, 2, 3, 4, "Hi", { name: "Chandler" }, [5, 6, 7]];
arr.splice(1, 3);
// console.log(arr);

//add
arr.splice(1, 0, 2, 3, 4, 5);
// console.log(arr);

//update
arr.splice(1, 3, 6, 7, 8);
// console.log(arr);

// Splice vs Slice

const subArr = arr.slice(1, 4);
// last index is excluded
// console.log(subArr);

/* *********************** */
// Shallow copy of array

const arr2 = arr;
// both the array points to the same address
//  if one is updated other will also get affected

arr2.splice(1, 3);
// console.log(arr2);
// console.log(arr);

// Deep copy of an array

const arr3 = [...arr];
const arr4 = Array.from(arr);
const arr5 = arr.concat();
arr3.splice(1, 3);
arr4.splice(1, 4);
console.log(arr3, arr, arr4, arr5);

// add two arrays in JS

const newArr = [...arr, ...arr3];
const newArr2 = arr.concat(arr4);
console.log(newArr, newArr2);

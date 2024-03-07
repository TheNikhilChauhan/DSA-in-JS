//How do you create an empty array in JS

const arr = [1, 2, 3, 4, "Hi", { name: "Chandler" }, [5, 6, 7]];
// const arr2 = new Array(); //empty array
console.log(arr);
// console.log(arr2);

/* ***************************** */

// how do you access the first and last elements of an array?

const firstElement = arr[0];
const arrLength = arr.length;
const lastElement = arr[arr.length - 1];
console.log(firstElement, arrLength, lastElement);

/* ************************* */

// How do you remove the last element from an array?

const lastElement1 = arr.pop();
console.log(arr, `Popped element: ${lastElement1}`);

// How do you add an element to the end of an array?

arr.push("Ross");
console.log(arr);

// add element at the start of an array
arr.unshift(0);
console.log(arr);

//remove element at the start of array
arr.shift();
console.log(arr);

// loop through an array in JS

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((x) => console.log(x));

for (let x of arr) {
  console.log(x);
}

// Sort an array in ascending and descending order

const x = [1, 2, 4, 6, 3, 1, 7, -3];
let arr = x.sort();
console.log(x);
// console.log(arr);

x.sort((a, b) => b - a);
console.log(x);

// Map, filter and reduce

const x = [1, 2, 4, 6, 3, 1, 7, -3];

const newMap = x.map((e, i) => e * e);
console.log(newMap);

const filterNum = newMap.filter((e) => e > 4);
console.log(filterNum);

const sumOfNums = filterNum.reduce((acc, element) => acc + element, 0);
console.log(sumOfNums);

//flat

const y = [1, 2, 3, [3, 5, 6, [6, 7, 8], 9, 6], 4, 5, 7];
let flatted = y.flat(2);
console.log(flatted);

//filter vs find

const nums = newMap.find((ele) => ele > 16);
//it will find only the next element / only one element
console.log(nums);

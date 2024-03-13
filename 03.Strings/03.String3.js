// Reverse String

// const reverseString = ([...str]) => {
//   const reverse = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse.push(str[i]);
//   }
//   return reverse;
// };

// const s = ["h", "e", "l", "l", "o"];
// console.log(reverseString(s));

// **********************
// Condition: Do not return anything, modify s in-place instead.

const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    right--;
    left++;
  }
  return s;
};

const s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));

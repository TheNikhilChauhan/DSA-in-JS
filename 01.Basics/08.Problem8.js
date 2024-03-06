// Fizz Buzz
/* 
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
*/

let fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else {
      answer.push(i.toString());
    }
  }
  return answer;
};

console.log(fizzBuzz(17));

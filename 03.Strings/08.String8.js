// Valid Palindrome

/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome
*/

const isPalindrome = (s) => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    return true;
  }
  return false;
};

console.log(isPalindrome("Nitin"));

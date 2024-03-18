// IS Palindrome ?

function isPalindrome(x) {
  if (x.length <= 1) {
    return true;
  }
  if (x[0] !== x[x.length - 1]) {
    return false;
  }

  return isPalindrome(x.slice(1, -1));
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));

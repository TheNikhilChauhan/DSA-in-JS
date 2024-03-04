// Check if a number is palindrome

function isPalindrome(num) {
  let Num = num;
  let reverseNum = 0;
  while (Num > 0) {
    let last = Num % 10;
    reverseNum = reverseNum * 10 + last;
    Num = Math.floor(Num / 10);
  }
  return num === reverseNum;
}

console.log(isPalindrome(123321));

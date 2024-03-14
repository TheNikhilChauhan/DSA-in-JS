// Reverse Vowels of a String

/* 
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
*/

const reverseVowels = (s) => {
  const str = s.split("");
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const vowelIndex = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelIndex.push(i);
    }
  }

  //   Reverse the vowels
  for (let i = 0; i < Math.floor(vowelIndex.length / 2); i++) {
    const temp = str[vowelIndex[i]];
    str[vowelIndex[i]] = str[vowelIndex[vowelIndex.length - 1 - i]];
    str[vowelIndex[vowelIndex.length - 1 - i]] = temp;
  }
  return str.join("");
};

const s = "hello";
console.log(reverseVowels(s));

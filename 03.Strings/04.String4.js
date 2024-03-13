// Valid Anagram

/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false */

/* const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  let count = 0;
  const sArr = Array.from(s);
  sArr.forEach((e) => {
    if (t.includes(e)) {
      count++;
      t = t.replace(e, "");
    } else {
      return false;
    }
  });

  return count === s.length;
}; */

// another method

const isAnagram = (s, t) => {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

const s = "nikhil";
const t = "likhin";
console.log(isAnagram(s, t));

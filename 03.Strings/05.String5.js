// Longest Common Prefix

/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
*/

// Horizontal
/* 
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      console.log(strs[i]);
      console.log(prefix);
      console.log(strs[i].indexOf(prefix));
      console.log(strs[i].indexOf(prefix) !== 0);
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
};

 */

// vertical

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));

// more optimized

var longestCommonPrefix2 = function (strs) {
  const [first, ...rest] = strs;

  let result = "";

  for (let i = 0; i < first.length; i++) {
    const current = first[i];
    if (rest.every((word) => current === word[i])) {
      result = `${result}${current}`;
    } else {
      break;
    }
  }

  return result;
};

const strs2 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix2(strs));

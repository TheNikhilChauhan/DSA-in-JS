// String basics

// 1. Length of a string
let firstName = "Chandler Bing";
console.log(firstName.length);

// 2. Access String Elements

console.log(firstName.charAt(2)); //a
console.log(firstName[2]); // a
console.log(firstName.charCodeAt(2)); // 97 ASCII code

// 3. Check presence of Character
console.log(firstName.includes("r")); // true
console.log(firstName.indexOf("d")); // 4
console.log(firstName.lastIndexOf("n")); // 11

// 4.Compare Two Strings
let anotherName = "Joey Tribianni";
console.log(firstName.localeCompare(anotherName));
// returns 0 if strings are equal and -1 if not

// 5. Replace substring

const str =
  "If you wanna survive then push past your limits, else the path ends for you";
// console.log(str.replace("you", "I/Me"));
// console.log(str.replaceAll("you", "I/me"));

// 6. Substring of a string
console.log(str.substring(7, 30));
console.log(str.slice(-20, -1));

// 7. Split and join
console.log(str.split(""));
const subString = str.split("");
console.log(subString.join(" "));

//  8. String Start and End
console.log(str.startsWith("then")); //false
console.log(str.endsWith("you")); //true

// 9. Trim and Case Conversion

const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(trimStrStart);
console.log(trimStrEnd);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// 10. Convert Number and Object to String
const num = 452;
console.log(num, num.toString());

const obj = {
  firstName: "Ross",
  lastName: "Geller",
};
console.log(obj, JSON.stringify(obj));

// 11. Concatenate String
const lastName = "Bing";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is the best developer`);
console.log(firstName.concat(lastName), "is the", "Best");

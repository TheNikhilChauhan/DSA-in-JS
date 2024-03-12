// Find the Index of the first occurrence in a String

const haystack = "sadbutsad";
const needle = "sad";
const findOccurrenceIndex = (haystack, needle) => {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

console.log(findOccurrenceIndex("sadButsad", "sad"));

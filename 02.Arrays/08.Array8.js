// Majority Element

let majorityElement = function (nums) {
  if (nums.length === 0) return null; // Optimization: return null for empty arrays
  let majority = 0;
  let counter = 0;

  nums.forEach((elem) => {
    if (counter === 0) {
      majority = elem;
    }

    counter += elem === majority ? 1 : -1;
  });

  return majority;
};

arr = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(arr));

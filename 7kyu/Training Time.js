/**
 * The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays.
 * Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds).
 * For every such array, swap the elements.
 */

const shuffleIt = (arr, ...NumericArr) => {
  NumericArr.forEach(([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });
  return arr;
};

// console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));

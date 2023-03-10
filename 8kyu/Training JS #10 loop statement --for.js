/**
 * We need to traverse arr by using a for loop.
 * If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
 */

const pickIt = (arr) => {
  const odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    !!(arr[i] % 2) ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd, even];
};

/**
 * The first mission: let all elements in the array keep two decimal places(No need to convert number n).
 * The second mission: Traversal arr, count the number of the element which smaller than n and return it.
 */

const howManySmaller = (arr, n) => {
  return arr
    .map((num) => +num.toFixed(2))
    .reduce((acc, num) => (num < n ? ++acc : acc), 0);
};

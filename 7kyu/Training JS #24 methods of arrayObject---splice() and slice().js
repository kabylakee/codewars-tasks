/**
 * Coding in function threeInOne.
 * function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.
 * Note1: You should not modify the original array.
 */

const threeInOne = (arr) => {
  const newArr = [];
  const copyArr = arr.slice();
  while (copyArr.length) {
    newArr.push(copyArr.splice(0, 3).reduce((acc, elem) => acc + elem, 0));
  }
  return newArr;
};

// console.log(threeInOne([1, 3, 5, 2, 4, 6, 7, 7, 7]));

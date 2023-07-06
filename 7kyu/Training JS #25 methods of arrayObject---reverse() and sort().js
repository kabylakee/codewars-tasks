/**
 * Coding in function sortIt. function accept 1 parameters arr, it's a number array.
 * Your task is to sort the array according to the specified conditions, and returns a new array(should not modify the original array).
 *
 * conditions1: according to the number of elements(in ascending order) for example:
 *
 * sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
 * because [1,1,1,2,2,3] has one 3, two 2 and three 1
 * conditions2: If the same number of elements, according to the number values(in descending order) for example:
 *
 * sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
 * because number of 3,2 and 1 both are three, then according to 3>2>1
 * Comprehensive two conditions should be like this:
 *
 * sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
 */

const sortIt = (arr) => {
  const obj = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return arr.slice().sort((a, b) => {
    if (obj[a] === obj[b]) return b - a;
    if (obj[a] > obj[b]) return 1;
    return -1;
  });
};

// const sortIt = (arr) => {
//   return arr.slice().sort((a, b) => {
//     const filterArrA = arr.filter((el) => el === a).length;
//     const filterArrB = arr.filter((el) => el === b).length;
//     if (filterArrA === filterArrB) {
//       return b - a;
//     } else if (filterArrA > filterArrB) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// };

// console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));

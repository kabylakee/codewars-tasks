/**
 * Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance.
 * For empty output return (an empty list).
 * Consult the solution set-up for the exact data structure implementation depending on your language.
 *
 * Example:
 * orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */

// const orderedCount = (text) => {
//   const obj = {};
//   [...text].forEach((char) => (obj[char + " "] = (obj[char + " "] || 0) + 1));
//   return Object.entries(obj).map((value) => [...value[0].replace(' ', ''), value[1]]);
// };

const orderedCount = (text) => {
  return Object.entries(
    [...text].reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {})
  );
};

// console.log(orderedCount("Code Wars"));

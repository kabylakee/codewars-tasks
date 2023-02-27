/**
 * Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
 */

const cubeOdd = (arr) =>
  arr.every((num) => typeof num === "number")
    ? arr
        .map((num) => Math.pow(num, 3))
        .reduce((sum, num) => (num % 2 !== 0 ? sum + num : sum), 0)
    : undefined;

// console.log(cubeOdd([1, 2, 3, 4]));

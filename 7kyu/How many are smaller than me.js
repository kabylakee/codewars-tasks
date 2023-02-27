/**
 * How many are smaller than me?
 * Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
 *
 * For example:
 *
 * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
 * Input [1, 2, 0] => Output [1, 1, 0]
 */

function smaller(nums) {
  return nums.reduce((acc, num, i) => {
    const smallNumsCount = nums.slice(i).filter((small) => num > small).length;
    return acc.concat(smallNumsCount);
  }, []);
}

// console.log(smaller([1, 2, 3]));

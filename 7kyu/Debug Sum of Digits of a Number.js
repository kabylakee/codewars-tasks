/**
 * Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
 *
 * Example
 * 123  => 6
 * 223  => 7
 * 1337 => 14
 */

const getSumOfDigits = (integer) =>
  String(integer)
    .split("")
    .map(Number)
    .reduce((sum, num) => sum + num);

// console.log(getSumOfDigits(1234));

/**
 * Simple Fun #176: Reverse Letter
 * Task
 * Given a string str, reverse it and omit all non-alphabetic characters.
 *
 * Example
 * For str = "krishan", the output should be "nahsirk".
 *
 * For str = "ultr53o?n", the output should be "nortlu".
 *
 * Input/Output
 * [input] string str
 * A string consists of lowercase latin letters, digits and symbols.
 *
 * [output] a string
 */

const reverseLetter = (str) => str.match(/[A-Z]/gi).reverse().join("");

// console.log(reverseLetter("krish21an"));

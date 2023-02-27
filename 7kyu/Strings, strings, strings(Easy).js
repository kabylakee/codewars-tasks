/**Task
 * The toString() method has been disabled for booleans, numbers, arrays and objects.
 * Your goal is to retrive toString() for the following data types.
 *
 * For booleans:
 * true should be converted to "true"
 * false should be converted to "false"
 *
 * For numbers, conversion should be as follows:
 * (3).toString() === "3"
 * (3.14).toString() === "3.14"
 *
 * For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings.
 * However, on top of fixing it, we would also like to improve it as well.
 * We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code.
 * For example:
 * [].toString() === "[]"
 * [2,4,8,17].toString() === "[2, 4, 8, 17]"
 *
 * Your recovered toString() methods should only return the stringified version of the input - it should NOT alter the original value.
 * Test cases have been created to confirm this.
 */

String.prototype.toString = function () {
  return `${this}`;
};

// console.log((123).toString());

/**
 * In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters,
 * lowercase, numbers and special characters, as follows.
 *
 * Solve("*'&ABCDabcde12345") = [4,5,5,3].
 * --the order is: uppercase letters, lowercase, numbers and special characters.
 */

const solve = (str) => {
  return Object.values(
    [...str].reduce(
      (acc, char) => {
        if (char.match(/[A-Z]+/g)) {
          acc.upperLatters += 1;
        } else if (char.match(/[a-z]+/g)) {
          acc.lowerLatters += 1;
        } else if (char.match(/[0-9]+/g)) {
          acc.numbers += 1;
        } else {
          acc.symbols += 1;
        }
        return acc;
      },
      { upperLatters: 0, lowerLatters: 0, numbers: 0, symbols: 0 }
    )
  );
};

// console.log(solve("Codewars@codewars123.com"));

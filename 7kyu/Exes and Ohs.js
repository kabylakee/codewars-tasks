/**
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 *
 * Examples input/output:
 *
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 */

const XO = (str) => {
  const obj = str
    .toLowerCase()
    .split("")
    .reduce(
      (acc, char) => {
        if (char === "x") {
          return {
            ...acc,
            x: acc.x + 1,
          };
        }
        if (char === "o") {
          return {
            ...acc,
            o: acc.o + 1,
          };
        }

        return acc;
      },
      { x: 0, o: 0 }
    );

  return obj.x === obj.o;
};

// const XO = (str) => str.toLowerCase().split("x").length === str.toLowerCase().split("o").length;

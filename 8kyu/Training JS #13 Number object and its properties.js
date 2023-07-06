/**
 * To judge the number n. If n is one of the above five constants, return one of these string.
 */

const whatNumberIsIt = (n) => {
  switch (n) {
    case Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    default:
      return `Input number is ${Number.isNaN(n) ? "Number.NaN" : n}`;
  }
};

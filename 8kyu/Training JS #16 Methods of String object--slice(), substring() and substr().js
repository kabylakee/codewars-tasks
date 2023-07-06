/**
 * The first mission: Traversing arr, find the shortest string length.
 * The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0).
 */

const cutIt = (arr) => {
  return arr.map((str) =>
    str.slice(0, Math.min(...arr.map((el) => el.length)))
  );
};

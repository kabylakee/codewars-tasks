/**
 *  Complete the functions using arr inside the function bodies.
 */

const el = 1;

const getLength = (arr) => arr.length;

const getFirst = (arr) => arr[0];

const getLast = (arr) => arr[arr.length - 1];

const pushElement = (arr) => {
  arr.push(el);
  return arr;
};

const popElement = (arr) => {
  arr.pop();
  return arr;
};

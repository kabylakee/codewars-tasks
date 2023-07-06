/**
 * Please return the gap between the first position of c and the last position of c.
 * If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0;
 * If there is no c in the str, should return -1. Retrieval should not ignored the case.
 */

const firstToLast = (str, c) =>
  str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;

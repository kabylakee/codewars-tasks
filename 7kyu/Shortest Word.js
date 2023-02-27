/**
 * Simple, given a string of words, return the length of the shortest word(s).
 *
 * String will never be empty and you do not need to account for different data types.
 */

function findShort(s) {
  const wordArr = s.split(" ");
  let length = wordArr[0].length;

  for (word of wordArr) {
    length = length < word.length ? length : word.length;
  }

  return length;
}

// console.log(findShort("turns out random test cases are easier than writing out basic ones"));

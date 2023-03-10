/**
 * You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str,
 * alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.
 */

const padIt = (str, n) => {
  let num = 1;
  while (num <= n) {
    str = num % 2 === 1 ? `*${str}` : `${str}*`;
    num++;
  }
  return str;
};

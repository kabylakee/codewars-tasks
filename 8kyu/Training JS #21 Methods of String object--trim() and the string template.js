/**
 * Please return a string of 5 lines(newline symbol is \n).
 * The first line has one s; Second line have two s; and so on..Fifth line have five s;
 * Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.
 */

const fiveLine = (s) => {
  return [1, 2, 3, 4, 5].map((num) => s.trim().repeat(num)).join("\n");
};

// const fiveLine = (s) => {
//   s = s.trim();
//   return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
// };

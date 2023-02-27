/**
 * Write a program that, given a word, computes the scrabble score for that word.
 *
 * Letter Values
 * You'll need these:
 *
 * Letter                           Value
 * A, E, I, O, U, L, N, R, S, T       1
 * D, G                               2
 * B, C, M, P                         3
 * F, H, V, W, Y                      4
 * K                                  5
 * J, X                               8
 * Q, Z                               10
 *
 * There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.
 *
 * Examples
 * "cabbage" --> 14
 * "cabbage" should be scored as worth 14 points:
 *
 * 3 points for C
 * 1 point for A, twice
 * 3 points for B, twice
 * 2 points for G
 * 1 point for E
 *
 * And to total:
 * 3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14
 * Empty string should return 0.
 */

function scrabbleScore(str) {
  const obj = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10,
  };

  let key = "";

  if (!str.length) {
    return 0;
  }

  return str
    .toLowerCase()
    .split("")
    .reduce(
      (acc, char) =>
        (key = Object.keys(obj).find((s) => s.includes(char)))
          ? acc + obj[key]
          : acc,
      0
    );
}

// console.log(scrabbleScore("street"));

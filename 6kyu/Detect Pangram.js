/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
 * the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

// function isPangram(string) {
//   const alphabet = "abcdefjhijklmnopqrstuvwxyz".split('');
//   const word = [...new Set(string).toLowerCase()];
//   let index = 0;

//   alphabet.forEach(a => {
//     word.forEach(w => {
//       if (a === w) {
//         index++;
//       }
//     });
//   });

//   return index >= 26 ? true : false;

// }

const isPangram = (string) => {
  return "abcdefjhijklmnopqrstuvwxyz"
    .split("")
    .every((char) => string.toLowerCase().includes(char));
};

// console.log(isPangram('The quick brown fox jumps over the lazy dog'));

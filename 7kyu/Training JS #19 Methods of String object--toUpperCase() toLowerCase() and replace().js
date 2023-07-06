/**
 * We translate the sentence into an alien language according to the following rules:
 * Each word in the sentence is separated by spaces.
 * The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized.
 * Looks very strange? Because this is the form of alien language ;-)
 */

const alienLanguage = (str) => {
  return str
    .toUpperCase()
    .split(" ")
    .map(
      (word) => word.slice(0, -1) + word.charAt(word.length - 1).toLowerCase()
    )
    .join(" ");
};

// const alienLanguage = (str) =>
//   str.toUpperCase().replace(/\w\b/g, (char) => char.toLowerCase());

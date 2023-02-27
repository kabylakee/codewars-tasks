/**
 * You need to write a function, that returns the first non-repeated character in the given string.
 *
 * If all the characters are unique, return the first character of the string.
 * If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
 *
 * You can assume, that the input string has always non-zero length.
 *
 * Examples
 * "test"   returns "e"
 * "teeter" returns "r"
 * "trend"  returns "t" (all the characters are unique)
 * "aabbcc" returns null (all the characters are repeated)
 */

const firstNonRepeated = (str) => {
  const obj = str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (Object.keys(acc).find((key) => key === char)) {
        return { ...acc, [char]: acc[char] + 1 };
      }
      return { ...acc, [char]: 0 };
    }, {});

  const value = Object.keys(obj).find((key) => obj[key] === 0);
  return value ? value : null;
};

// console.log(firstNonRepeated("teeter"));

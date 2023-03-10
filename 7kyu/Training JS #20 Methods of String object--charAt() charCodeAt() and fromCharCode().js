/**
 * Coding in function topSecret, function accept 1 parameter:file. file is an encrypted string.
 * Encryption using the right shift 3.
 *  Your job is to decrypt the file and read the contents of the file, and then answer my three questions.
 */

const topSecret = (str) => {
  return str.replace(/\w/g, (char) =>
    String.fromCharCode(char.charCodeAt() + (`ABCabc`.includes(char) ? 23 : -3))
  );
};

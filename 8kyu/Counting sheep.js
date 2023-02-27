//Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, present) => (present ? ++acc : acc), 0);
}

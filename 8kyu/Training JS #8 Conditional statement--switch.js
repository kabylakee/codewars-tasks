/**
 * Return the number of days that are in month.
 * There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
 */

const howManydays = (month) => {
  switch (month) {
    case 2: return 28;
    case 4: case 6: case 9: case 11: return 30;
  }
  return 31;
};


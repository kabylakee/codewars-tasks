//Count of positives/sum of negatives
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

const countPositivesSumNegatives = (input) => {
  const result = [];

  if (!input?.length || !input) {
    return result;
  }

  const positiveCount = input.filter((el) => el > 0);
  const negativeSum = input.reduce(
    (acc, num) => (num < 0 ? acc + num : acc),
    0
  );

  result.push(positiveCount?.length, negativeSum);
  return result;
};

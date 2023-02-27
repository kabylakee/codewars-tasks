// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = (numbers) => numbers.reduce((acc, num) => acc + num ** 2, 0);

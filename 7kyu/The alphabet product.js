/**
 * I have four positive integers, A, B, C and D, where A < B < C < D.
 * The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
 */

function alphabet(ns) {
  let newArr = ns.sort((a, b) => a - b);
  return (
    Math.max(...newArr) / newArr[newArr[0] * newArr[1] === newArr[2] ? 3 : 2]
  );
}

// console.log(alphabet([7, 96, 8, 240, 12, 140, 20, 56]));

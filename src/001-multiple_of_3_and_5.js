/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
import { checkMultipleOf3, checkMultipleOf5, sum1ToN } from "./utils";
// mine
export const getMultiplesOf3And5 = n =>
  Array(n - 1)
    .fill()
    .map((_, k) => k + 1)
    .reduce(
      (acc, curr) =>
        checkMultipleOf3(curr) || checkMultipleOf5(curr) ? acc + curr : acc,
      0
    );

// best
const makeSumMultiples = limit => a => sum1ToN(Math.floor((limit - 1) / a)) * a;
const makeCombineSumMultiples = arr => limit => {
  const getPrimeFactor = (n, factor) => {
    while (factor) {
      const prod = n / factor;
      if (prod === 1) {
        return factor;
      } else if (Number.isInteger(prod)) {
        return getPrimeFactor(prod, factor);
      }
      factor++;
    }
  };
  const sumMulUntilLimit = makeSumMultiples(limit);
  return (
    arr.reduce((a, c) => a + sumMulUntilLimit(c), 0) -
    sumMulUntilLimit(arr.reduce((a, c) => a * c, 1))
  );
};
export const combineSumMul3And5 = makeCombineSumMultiples([3, 5]);
